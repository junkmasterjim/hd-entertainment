export default function LogoCloud() {
	return (
		<div className="py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg pt-2 -mb-4 font-semibold leading-8 text-primary">
					Proudly trusted by:
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
					<img
						className="max-h-24 w-full object-contain invert dark:filter-none"
						src="/808mafia.svg"
						alt="808 Mafia"
						width={158}
						height={48}
					/>
					<img
						className="max-h-32 w-full dark:invert object-contain "
						src="/nikelogo.svg"
						alt="Nike"
						width={158}
						height={48}
					/>
					<img
						className="max-h-12 w-full object-contain dark:invert"
						src="/YSL_Records.svg"
						alt="YSL Records"
						width={158}
						height={48}
					/>
				</div>
			</div>
		</div>
	);
}
