"use client";
import Card from "@/components/common/Card";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const TVSeriesSection = () => {
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const Shows = () => {
		return EntertainmentList.filter(
			(entertainmentCard) => entertainmentCard.category === "TV Series"
		).map((entertainmentCard, index) => {
			return <Card key={index} {...entertainmentCard} />;
		});
	};

	return (
		<section>
			<h2 className='heading_l my-6'>TV Series</h2>
			<div className='flex flex-wrap gap-10'>{Shows()}</div>
		</section>
	);
};

export default TVSeriesSection;
