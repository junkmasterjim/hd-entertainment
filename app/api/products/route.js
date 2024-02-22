import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

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
		const products = await prismadb.product.findMany();
		return NextResponse.json(products);
	} else if (req.headers.get("isFromSite") == "true") {
		const products = await prismadb.product.findMany();
		return NextResponse.json(products);
	} else return NextResponse.json("401: Unauthenticated");
}

export async function POST(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();
			console.log(body);
			const { name, imageUrl, price, url, description } = body;

			if (!name) {
				return NextResponse.json({
					route: "[PRODUCTS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Name is required.",
				});
			}
			if (!imageUrl) {
				return NextResponse.json({
					route: "[PRODUCTS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Image URL is required.",
				});
			}
			if (!price) {
				return NextResponse.json({
					route: "[PRODUCTS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Price is required.",
				});
			}
			if (!url) {
				return NextResponse.json({
					route: "[PRODUCTS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Product link is required.",
				});
			}
			if (!description) {
				return NextResponse.json({
					route: "[PRODUCTS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Product link is required.",
				});
			}

			const base64 = await generateBase64(imageUrl);

			const newProduct = await prismadb.product.create({
				data: {
					name: `${name}`,
					imageUrl: `${imageUrl}`,
					description: `${description}`,
					price: parseFloat(price),
					url: `${url}`,
					base64: base64,
				},
			});

			console.log(newProduct);
			console.log("Product created");

			return NextResponse.json(newProduct);
		} catch (err) {
			console.log(err);
			return NextResponse.json({
				message: "500: Internal Server Error",
				error: err,
			}).status(500);
		}
	} else return NextResponse.json("401: Unauthenticated");
}

export async function PATCH(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();
			const { name, imageUrl, price, url, description, updateId, id } = body;

			if (id && updateId) {
				// console.log("id:  ", id);
				// console.log("updateId:  ", updateId);

				const updateImage = await prismadb.product.update({
					where: {
						id: id,
					},
					data: {
						id: updateId,
					},
				});
				// console.log(updateImage);
				return NextResponse.json(updateImage);
			}

			if (!name) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Name is required.",
				});
			}
			if (!imageUrl) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Image URL is required.",
				});
			}
			if (!url) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Product link is required.",
				});
			}
			if (!id) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "ID is required.",
				});
			}
			if (!price) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Price is required.",
				});
			}
			if (!description) {
				return NextResponse.json({
					route: "[PRODUCTS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Product link is required.",
				});
			}

			const base64 = await generateBase64(imageUrl);

			const updateProduct = await prismadb.product.update({
				where: {
					id: id,
				},
				data: {
					name: `${name}`,
					imageUrl: `${imageUrl}`,
					description: `${description}`,
					price: parseFloat(price),
					url: `${url}`,
					base64: base64,
				},
			});
			return NextResponse.json(updateProduct);
		} catch (err) {
			console.log(err);
			return NextResponse.json({
				message: "500: Internal Server Error",
				error: err,
			}).status(500);
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
					route: "[PRODUCTS_DELETE]",
					status: "ERR 400: BAD REQUEST",
					message: "ID is required.",
				});
			}

			const deleteProduct = await prismadb.product.delete({
				where: {
					id: id,
				},
			});

			return NextResponse.json(deleteProduct);
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
			}).status(500);
		}
	} else return NextResponse.json("401: Unauthenticated");
}
