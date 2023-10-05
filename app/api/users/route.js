import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import prismadb from "@/lib/prismadb";

export async function GET(req) {
	const session = await getServerSession(req);
	if (session) {
		const users = await prismadb.user.findMany();
		return NextResponse.json(users);
	} else return NextResponse.json("401: Unauthenticated");
}

export async function POST(req) {
	const session = await getServerSession(req);
	if (session) {
		try {
			const body = await req.json();

			const { name, email } = body;

			if (!email) {
				return NextResponse.json({
					route: "[USERS_POST]",
					status: "ERR 400: BAD REQUEST",
					message: "Email is required.",
				});
			}

			const newUser = await prismadb.user.create({
				data: {
					name: `${body.name}` || null,
					email: `${body.email}`,
				},
			});
			return NextResponse.json(newUser);
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
			const { name, email, id } = body;

			// console.log(name, email, id);

			if (!name) {
				return NextResponse.json({
					route: "[USERS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Name is required.",
				});
			}
			if (!email) {
				return NextResponse.json({
					route: "[USERS_PATCH]",
					status: "ERR 400: BAD REQUEST",
					message: "Email is required.",
				});
			}

			const updateUser = await prismadb.user.update({
				where: {
					id: id,
				},
				data: {
					name: name,
					email: email,
				},
			});
			return NextResponse.json(updateUser);
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
					route: "[USERS_DELETE]",
					status: "ERR 400: BAD REQUEST",
					message: "ID is required.",
				});
			}

			const deleteUser = await prismadb.user.delete({
				where: {
					id: id,
				},
			});

			return NextResponse.json(deleteUser);
		} catch (err) {
			return NextResponse.json({
				message: "500: Internal Server Error",
			});
		}
	} else return NextResponse.json("401: Unauthenticated");
}
