"use client";
import Card from "@/components/common/Card";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const BookmarksSection = () => {
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const Shows = () => {
		return EntertainmentList.filter(
			(entertainmentCard) => entertainmentCard.isBookmarked
		).map((entertainmentCard, index) => {
			return <Card key={index} {...entertainmentCard} />;
		});
	};

	return (
		<section>
			<h2 className='heading_l my-6'>Bookmarks</h2>
			<div className='flex flex-wrap gap-10'>{Shows()}</div>
		</section>
	);
};

export default BookmarksSection;
