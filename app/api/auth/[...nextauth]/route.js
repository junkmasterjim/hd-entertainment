import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn =
				user.email == process.env.HD_EMAIL ||
				user.email == process.env.NOAH_EMAIL;
			if (isAllowedToSignIn) {
				return true;
			} else {
				// Return false to display a default error message
				// return false;

				// Or you can return a URL to redirect to:
				return "/";
			}
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	url: process.env.NEXTAUTH_URL,
});

export { handler as GET, handler as POST };
