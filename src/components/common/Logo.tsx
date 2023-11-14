import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src='/vectors/logo.svg'
				alt='Entertainment App'
				width={32}
				height={26}
			/>
		</Link>
	);
};

export default Logo;
