"use client";
import Card from "@/components/common/Card";
import { RootState } from "@/redux/store";
import STRINGS from "@/utils/string";
import { useSelector } from "react-redux";

const MoviesSection = () => {
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const Movies = () => {
		return EntertainmentList.filter(
			(entertainmentCard) => entertainmentCard.category === "Movie"
		).map((entertainmentCard, index) => {
			return <Card key={index} {...entertainmentCard} />;
		});
	};

	return (
		<section>
			<h2 className='heading_l my-6'>{STRINGS.pages.movies.heading}</h2>
			<div className='flex flex-wrap gap-10'>
				<Movies />
			</div>
		</section>
	);
};

export default MoviesSection;
