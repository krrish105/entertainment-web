import type { Metadata } from "next";
import STRINGS from "@/utils/string";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookmarksSection from "@/components/sections/Bookmarks";

export const metadata: Metadata = {
	title: `${STRINGS.metadata.bookmarks.title}`,
	description: "",
};

export default function Bookmarked() {
	return (
		<DashboardLayout>
			<h1 className='sr-only'>Bookmarks</h1>
			<BookmarksSection />
		</DashboardLayout>
	);
}
