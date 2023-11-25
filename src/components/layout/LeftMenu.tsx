import Logo from "@/components/common/Logo";
import Navigation from "@/components/common/Navigation";

const LeftMenu = () => {
	return (
		<div className='left_menu mb-4 h-full lg:pb-8 lg:w-fit'>
			<div className='p-4 flex flex-row justify-between items-center bg-brandSemiDarkBlue h-full lg:p-8 lg:justify-start lg:flex-col lg:rounded-3xl'>
				<Logo />
				<Navigation />
			</div>
		</div>
	);
};

export default LeftMenu;
