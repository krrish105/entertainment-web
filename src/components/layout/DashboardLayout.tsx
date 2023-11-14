import LeftMenu from "@/components/layout/LeftMenu";
import SearchBar from "@/components/inputElements/SearchBar";

const DashboardLayout = ({ children }: any) => {
	return (
		<div className='flex h-full w-full'>
			<LeftMenu />
			<div className='mt-8 w-full pt-6 mr-8'>
				<SearchBar />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
