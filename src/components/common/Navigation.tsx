"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import STRINGS from "@/utils/string";

const Navigation = () => {
	const pathname = usePathname();

	const navLinksComponent: any = () => {
		let key: keyof typeof STRINGS.common.navigation;
		let arr = [];

		for (key in STRINGS.common.navigation) {
			if (
				Object.prototype.hasOwnProperty.call(STRINGS.common.navigation, key)
			) {
				const element = STRINGS.common.navigation[key];

				arr.push(
					<li key={element.title}>
						<Link
							href={element.path}
							className={element.path === pathname ? "active_link" : ""}
							rel='noreferrer'
							title={element.title}
						>
							<Image
								src={element.image}
								alt={element.title}
								width={20}
								height={20}
							/>
						</Link>
					</li>
				);
			}
		}
		return arr;
	};

	return (
		<ul className='left_menu_link_list flex flex-row gap-6 lg:mt-28 lg:flex-col lg:gap-10'>
			{navLinksComponent()}
		</ul>
	);
};

export default Navigation;
