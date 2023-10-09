import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import prismadb from "@/lib/prismadb";

export async function GET(req) {
	const session = await getServerSession(req);
	console.log(req.headers.get("isFromSite"));

	if (session) {
		const portfolio = await prismadb.portfolioImage.findMany();
		return NextResponse.json(portfolio);
	} else if (req.headers.get("isFromSite") == "true") {
		const portfolio = await prismadb.portfolioImage.findMany();
		return NextResponse.json(portfolio);
	} else return NextResponse.json("401: Unauthenticated");
}

export async function POST(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();

			const { name, imageUrl, isVideo } = body;

			if (!name) {
				return NextResponse.json({
					route: "[PORTFOLIO_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Name is required.",
				});
			}
			if (!imageUrl) {
				return NextResponse.json({
					route: "[PORTFOLIO_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Image URL is required.",
				});
			}

			if (body.isVideo == true) {
				const newImg = await prismadb.portfolioImage.create({
					data: {
						name: `${body.name}`,
						imageUrl: `${body.imageUrl}`,
						isVideo: true,
					},
				});
				return NextResponse.json(newImg);
			} else {
				const newImg = await prismadb.portfolioImage.create({
					data: {
						name: `${body.name}`,
						imageUrl: `${body.imageUrl}`,
					},
				});
				return NextResponse.json(newImg);
			}
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
				error: err,
			});
		}
	} else return NextResponse.json("401: Unauthenticated");
}

export async function PATCH(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();
			const { name, imageUrl, id } = body;

			// console.log(name, email, id);

			if (!name) {
				return NextResponse.json({
					route: "[PORTFOLIO_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Name is required.",
				});
			}
			if (!imageUrl) {
				return NextResponse.json({
					route: "[PORTFOLIO_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Image URL is required.",
				});
			}

			const updateImage = await prismadb.portfolioImage.update({
				where: {
					id: id,
				},
				data: {
					name: name,
					imageUrl: imageUrl,
				},
			});
			return NextResponse.json(updateImage);
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
			});
		}
	} else return NextResponse.json("401: Unauthenticated");
}

export async function DELETE(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();
			const id = body?.id;

			if (!id) {
				return NextResponse.json({
					route: "[PORTFOLIO_DELETE]",
					status: "ERR 400: BAD REQUEST",
					message: "ID is required.",
				});
			}

			const deleteImage = await prismadb.portfolioImage.delete({
				where: {
					id: id,
				},
			});

			return NextResponse.json(deleteImage);
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
			});
		}
	} else return NextResponse.json("401: Unauthenticated");
}
