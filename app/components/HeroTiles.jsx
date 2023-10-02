import Image from "next/image";
import Link from "next/link";

export default function HeroTiles() {
	return (
		<main>
			<div className="relative isolate">
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-50 lg:px-8 lg:pt-16">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							{/* Hero Content */}

							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-primary  sm:text-6xl">
									Experience creativity like no other.
								</h1>
								<p className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
									Your premier destination for industry standard music
									production, as well as graphic design, and video production
									expertise. Where rhythms resonate and visuals abound; we
									transform your vision into a reality.
								</p>
								<div className="mt-10 relative z-10 flex items-center gap-x-6">
									<Link
										className="bg-primary hover:bg-neutral dark:bg-neutral dark:hover:bg-neutral-focus text-secondary dark:text-primary btn border-none"
										href={"/about#about"}
										scroll={true}
									>
										Learn More <span aria-hidden="true">→</span>
									</Link>
									{/* <a
										href="#"
										className="bg-transparent dark:bg-transparent text-primary  btn border-neutral hover:bg-neutral-focus hover:text-secondary dark:hover:text-primary dark:border-secondary hover:border-none"
									>
										Contact
									</a> */}
								</div>
							</div>

							{/* Image Gallery */}

							<div className="z-0 -mt-4 flex justify-center gap-4 sm:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 sm:scale-100 scale-[85%]">
								{/* Grid Left */}
								<div className="ml-auto w-52 flex-none sm:space-y-8 space-y-4 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACBORNBmhXfMydKRg7IT1881ppbA2P4DWUH3uI2gloWMOoW3Dr1mSzFfheG4wnV6Qx4lt2DCgr7h2BtPnb8hVVYQKhC5K7A_Wq9rEiAKqvAO4I6GGkKQPGCZ1Jyzl1zWBnS_dKkQ5x89gxKrlHjadNXazG1RN6nAJHx4cNJtMy0P6oKkEN2IHrvQC3yiuZjANCrdifCRJ5zyYcd8Txx_mgpd5wTEBsMuQDwH7VXar8IREkg8RfPGs0m-vk9HzMM35nIW4b-Yfu198ZCLLKCuia0l9ik2rw2ESsDRQbcCs6ZjoQ/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACDXS32Yvft6PLLa5oroEl0BcQuwzvefMMyVIjF9JDYUGCeiY-JmvRxJi-AvALG1EUbta8lPTrOjBxz-IFpBXlSzVcL0dEMSrXAqiO4xbY6Pt6lM4O21SK9Pzc3Lve55KBsnqlioZN0_sffBeSTvgk1xj1MFFZb1_t3Q9xpLmiLGv9Q-41jRAE53Zum269GUs8YPiTkuT8hhB30Fg0fCNhI9vC7-REcD55ZVWxuqFqdohfkEmTwMMS_h2oS7kvQZ3SN1NtB0gC2ZY1z8DkP_HRHE_mPnxmQsG9hKW2fY9S0phA/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Center */}

								<div className="mr-auto w-52 flex-none sm:space-y-8 space-y-4 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACCDyGDDzL1ovUwTH7OT0t1jOzLzP6G-WKAkXaEIjENTlqtWLmF3SYqlqj3K-Lq7G042K_PgwAv9ot5ca54FuObY8CltcsiraTsxKRFBP2gEm4t1nPkmHvvamY10cdzy_xjPk_16u3orN4970ML4l-pRBlWrn15q7melSg3lqWrdDlq-nYcjwKxLjMIhAYqCHNq5Q9QSD8s2RacjKGqtf0jq9f4Ur2NQgJYuCQYtuZEkHwX-2jj_U9zSh5dnUhJd6BEwomoT3wj_31iFb5e2D8zt3_CCTHbZdwK0fNBAig2XDg/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACBnzwfc0r8F27hL9YeST-JJJcN2xf6AOe92myqiRdm3kYVUXIEYGsWyNwZAEphCgCkt4DXKtzgSdDByGCSzkxcB1LIDi30F9l4eLAKe-ba0IfBujx0oz0zCxAFAztYpGXt8bb9zGXa3o-Tzb9ChHR8aeneADj3UTHvQJYTvqDP6drt4eyfYABekTNH_wYRhtO6FSFCoyWu7933OXxEnxn7jl5Yiv0Nc4U-ZdzLRVcwmEZhMRS-Th7hn3_rhe3Bym2cmO-JuezmRTybb1CQI1yyw7Pg4CimkgHoFRO1BlFT9KA/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACBs9VYIpUk_oU4-reNhXv4y4ytWJ74J9OOWChVXcTw0YLthdNIrkuV4_xD6nGf5RmrkeMBWFvv1R1WTtdlmigYtij6AT6-9gScwTJRN-QSciAiIOQ57CTK5nDT2fari-N5t3FsblcENKA_yKuTOqH1LKRm-Wje2KOxN1WPc66qAFAhqu017LdYfF5KVhitK7zzRuFKvtC87SIV0l5VMg2l-_iKq8mEXVCxOzCmIEK_WhNSGd5E3MLLfj49SU-CFQUcEPMizkV9TYTivJXDcwJw7BbvPEjIZNE5bY2SKel518g/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Right */}

								<div className="w-52 flex-none sm:space-y-8 space-y-4 pt-32 sm:pt-0">
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACAyVKI6n2q_QVM5nGkSNGvU-7hmlsQNwR2AMRHY8ZKibQeOmqyNYMOnYZKTlWuM32OF4hM52ytnGtX50UTe9dcL1kUBRxGiPDDYBJ0h6LiNJHBCrbOnzDkNXjmHkinLQOlch5VgHlJNrH7ad1ATlVI6Q3LAaPzU2XOFXd-E-uZUHonjDnjHrb7hSOV5ABUp5_G0Ort80YbD7uuhtnY2Qun-1bVRGFyF1zE4OXv3BJE-8iy5mbb3QzkNeesOs5G5IpnqLMCGXSQgCW0mk4V3DOBUaPlwLLB1jZHqhBdF33YUPQ/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACCqJABBJP26EmH5OxZ72zaAbmvdEb66JtQFT6JHAsvfWfOOrJj1GO8_Fi1xi-Uwgkh2qC5cukPJOu0EpZkrv27JibzFEfcv2Qqe8RnmTgd1umvb1AXiSUZ1FAPmih7DKA0c-556LXtznHwRlqMJ7Jjo-kicHr_VqX8XMfac5eUhIxSjcaVc3uyzCePlLaYteh1My-GtndEH9KPbI-CmCZg1c8aXQPkm1VGw_59BMa9m5fu84E9QQBPeSt58ci6sl0_WTvK_kRh9F91vqRD9twUcGXVB9TNWzKWGd1atScl5Yw/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACCtOGu76yKmu4IcEexcLaH3rkil-f46cUJbuY7m_rv7jb_vzHFA5RFy1zRf6pidHTEsboJuo0crQt3MFNZXHN_BNQPLsSFOdOLmKCeEObA0WggBge2zBqBzttPjmZV_IBPzB3TRpIb_vnETRwc9Nly7eWZ6_JFPnvHsKXyExtC5g7Kyz72e5ODaN3oDUUwECW7Png935SgWVTWCm4kWYfZSpJUv-QEdY_LPAqsqDUTKvHx3ijmVi9X1Y1ih0oGYKFD2IIIeJTaPliTnovb4JqYlXU3ss0cfUOtP-tlrxNiWWg/p.jpeg?size=512x512&size_mode=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
