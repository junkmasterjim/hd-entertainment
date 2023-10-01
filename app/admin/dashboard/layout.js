import SessionProv from "@/providers/SessionProv";
import React from "react";

export default function Layout({ children }) {
	return <SessionProv>{children}</SessionProv>;
}
