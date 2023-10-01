import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET() {
	const users = await prismadb.user.findMany();
	return NextResponse.json(users);
}

export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email } = body;
		if (!name) {
			return NextResponse.json({
				route: "[USERS_POST]",
				status: "ERR 400: BAD REQUEST",
				message: "Name is required.",
			});
		}

		if (!email) {
			return NextResponse.json({
				route: "[USERS_POST]",
				status: "ERR 400: BAD REQUEST",
				message: "Email is required.",
			});
		}

		const newUser = await prismadb.user.create({
			data: {
				name: body.name,
				email: body.email,
			},
		});
		return NextResponse.json(newUser);
	} catch (err) {
		return NextResponse.json({
			message: "500: Internal Server Error",
		});
	}
}

export async function PATCH(req) {
	try {
		const body = await req.json();
		const { name, email, id } = body;

		console.log(name, email, id);

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
				email: email,
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
}

export async function DELETE(req) {
	try {
		const body = await req.json();
		const { email } = body;

		if (!email) {
			return NextResponse.json({
				route: "[USERS_PATCH]",
				status: "ERR 400: BAD REQUEST",
				message: "Email is required.",
			});
		}

		const deleteUser = await prismadb.user.delete({
			where: {
				email: email,
			},
		});

		return NextResponse.json(deleteUser);
	} catch (err) {
		return NextResponse.json({
			message: "500: Internal Server Error",
		});
	}
}
