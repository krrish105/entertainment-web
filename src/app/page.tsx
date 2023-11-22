import DashboardLayout from "@/components/layout/DashboardLayout";
import Recommendations from "@/components/sections/Recommendations";
import Trending from "@/components/sections/Trending";

export default async function Home() {
	return (
		<DashboardLayout>
			<Trending />
			<Recommendations />
		</DashboardLayout>
	);
}
