import DashboardLayout from "@/components/layout/DashboardLayout";
import BookmarksSection from "@/components/sections/Bookmarks";

export default function Bookmarked() {
	return (
		<main>
			<DashboardLayout>
				<BookmarksSection />
			</DashboardLayout>
		</main>
	);
}
