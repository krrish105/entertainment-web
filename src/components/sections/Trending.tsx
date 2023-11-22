"use client";
import TrendingCard from "@/components/common/TrendingCard";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Trending = () => {
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const Trendings = () => {
		return EntertainmentList.filter(
			(entertainmentCard) => entertainmentCard.isTrending
		).map((entertainmentCard, index) => {
			return <TrendingCard key={index} {...entertainmentCard} />;
		});
	};

	return (
		<section>
			<h2 className='heading_l my-6'>Trending</h2>
			<div className='vertical_scroll'>
				<Trendings />
			</div>
		</section>
	);
};

export default Trending;
