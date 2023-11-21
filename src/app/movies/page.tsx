import DashboardLayout from "@/components/layout/DashboardLayout";
import MoviesSection from "@/components/sections/Movies";

export default function Movies() {
	return (
		<main>
			<DashboardLayout>
				<MoviesSection />
			</DashboardLayout>
		</main>
	);
}
