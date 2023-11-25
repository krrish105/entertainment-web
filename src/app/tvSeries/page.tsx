import type { Metadata } from "next";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TVSeriesSection from "@/components/sections/TVSeries";
import STRINGS from "@/utils/string";

export const metadata: Metadata = {
	title: `${STRINGS.metadata.tvShows.title}`,
	description: "",
};

export default function TvSeries() {
	return (
		<DashboardLayout>
			<TVSeriesSection />
		</DashboardLayout>
	);
}
