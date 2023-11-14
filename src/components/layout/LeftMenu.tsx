import Logo from "@/components/common/Logo";
import Image from "next/image";
import Link from "next/link";

const LeftMenu = () => {
	return (
		<div className='left_menu p-8 w-fit h-full'>
			<div className='p-8 flex flex-col items-center bg-brandSemiDarkBlue rounded-3xl h-full'>
				<Logo />
				<ul className='mt-28 flex flex-col gap-10'>
					<li>
						<Link href='/' title='Home' className='active_link'>
							<Image
								src='/vectors/icon-nav-home.svg'
								alt='Home'
								width={20}
								height={20}
							/>
						</Link>
					</li>
					<li>
						<Link href='/movies' title='Movies'>
							<Image
								src='/vectors/icon-nav-movies.svg'
								alt='Movies'
								width={20}
								height={20}
							/>
						</Link>
					</li>
					<li>
						<Link href='/tv-series' title='TV Series'>
							<Image
								src='/vectors/icon-nav-tv-series.svg'
								alt='TV Series'
								width={20}
								height={20}
							/>
						</Link>
					</li>
					<li>
						<Link href='/bookmarks' title='Bookmarked'>
							<Image
								src='/vectors/icon-nav-bookmark.svg'
								alt='Bookmarked'
								width={20}
								height={20}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LeftMenu;
