import type { Metadata } from "next";
import STRINGS from "@/utils/string";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MoviesSection from "@/components/sections/Movies";

export const metadata: Metadata = {
	title: `${STRINGS.metadata.movies.title}`,
	description: "",
};

export default function Movies() {
	return (
		<DashboardLayout>
			<MoviesSection />
		</DashboardLayout>
	);
}
