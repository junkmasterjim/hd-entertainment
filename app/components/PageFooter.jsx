import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PageFooter() {
	return (
		<footer className="footer footer-center p-10">
			<aside>
				<Link className="hover:scale-110 transition-all" href={"/"}>
					<Image
						width={50}
						height={50}
						src={"/hd_simple_logo.svg"}
						alt=""
						className="invert dark:filter-none"
					/>
				</Link>

				<p className="font-bold">
					HD Entertainment Ltd. <br />
					Providing quality content since 2017
				</p>
				<p>Copyright © 2023 - All rights reserved</p>
			</aside>
			<nav>
				<div className="grid grid-flow-col gap-8">
					<a
						target="blank"
						href="https://twitter.com/itbehd"
						className="cursor-pointer hover:scale-100 sm:hover:scale-110 transition-all"
					>
						<Twitter height={36} width={36} />
					</a>
					<a
						target="blank"
						href="https://www.instagram.com/itbehd/"
						className="cursor-pointer hover:scale-100 sm:hover:scale-110 transition-all"
					>
						<Instagram height={36} width={36} />
					</a>
				</div>
			</nav>
		</footer>
	);
}
