import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { getPlaiceholder } from "plaiceholder";

import prismadb from "@/lib/prismadb";

const generateBase64 = async (imageUrl) => {
	try {
		const src = imageUrl;

		const buffer = await fetch(src).then(async (res) =>
			Buffer.from(await res.arrayBuffer())
		);

		const { base64 } = await getPlaiceholder(buffer);
		return base64;
	} catch (err) {
		console.log(err);
	}
};

export async function GET(req) {
	const session = await getServerSession(req);

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

			if (isVideo == true) {
				const newImg = await prismadb.portfolioImage.create({
					data: {
						name: `${body.name}`,
						imageUrl: `${body.imageUrl}`,
						isVideo: true,
					},
				});
				return NextResponse.json(newImg);
			} else {
				const base64 = await generateBase64(imageUrl);

				const newImg = await prismadb.portfolioImage.create({
					data: {
						name: `${body.name}`,
						imageUrl: `${body.imageUrl}`,
						base64: base64,
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

			const base64 = await generateBase64(imageUrl);

			const updateImage = await prismadb.portfolioImage.update({
				where: {
					id: id,
				},
				data: {
					name: name,
					imageUrl: imageUrl,
					base64: base64,
				},
			});
			return NextResponse.json(updateImage);
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
				error: err,
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
