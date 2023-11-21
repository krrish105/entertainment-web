import LeftMenu from "@/components/layout/LeftMenu";
import SearchBar from "@/components/inputElements/SearchBar";

const DashboardLayout = ({ children }: any) => {
	return (
		<div className='h-full dashboard_grid'>
			<LeftMenu />
			<div className='w-full pt-6 mr-8 overflow-x-hidden'>
				<SearchBar />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
