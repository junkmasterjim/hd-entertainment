"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HdLogoBG() {
	const [hueRotateDegrees, setHueRotateDegrees] = useState(
		`${Math.floor(Math.random() * 360)}deg`
	);
	const [isSafari, setIsSafari] = useState("");
	const [videoBlend, setVideoBlend] = useState("opacity-0");

	useEffect(() => {
		// mix-blend-mode doesn't work on Safari / iOS
		// Checks if user is on Safari / iOS
		const isUsingSafari =
			navigator.vendor &&
			navigator.vendor.indexOf("Apple") > -1 &&
			navigator.userAgent &&
			navigator.userAgent.indexOf("CriOS") == -1 &&
			navigator.userAgent.indexOf("FxiOS") == -1;

		setIsSafari(isUsingSafari);
		// console.log(isUsingSafari);

		if (!isSafari) {
			setVideoBlend("mix-blend-difference");
		}

		const vid = document.getElementById("hdLogoBG");
		vid?.play().catch((e) => {
			console.log(`Error: ${e}`);
		});
	}, [isSafari]);

	return (
		<>
			{/* 
				If Safari, renders image
				Else renders video
			*/}
			{isSafari ? (
				<div className="relative mt-[-5rem] py-24 floating mix-blend-difference dark:mix-blend-screen">
					<Image
						src={"/HDhomelogo.svg"}
						alt=""
						width={1920}
						height={1080}
						className="mix-blend-difference w-full lg:scale-50 pt-24 top-10 md:scale-75 md:top-[-5%] lg:top-[-20%] absolute pointer-events-none z-[-1] dark:mix-blend-screen"
						style={{
							filter: `hue-rotate(${hueRotateDegrees}) contrast(150%) saturate(150%) brightness(60%)`,
						}}
					/>
				</div>
			) : (
				<video
					id="hdLogoBG"
					src="/49fps.mov"
					autoPlay
					playsInline
					muted
					loop
					className={`${videoBlend} w-full lg:scale-50 pt-8 top-10 md:scale-75 md:top-[-5%] lg:top-[-20%] absolute pointer-events-none z-[-1] dark:mix-blend-screen`}
					style={{
						filter: `hue-rotate(${hueRotateDegrees}) contrast(150%) saturate(150%) brightness(60%)`,
					}}
				></video>
			)}
		</>
	);
}
