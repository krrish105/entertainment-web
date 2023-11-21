"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Card from "@/components/common/Card";

const Recommendations = () => {
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const RecommendationCards = () => {
		return EntertainmentList.map((entertainmentCard, index) => {
			return <Card key={index} {...entertainmentCard} />;
		});
	};

	return (
		<section>
			<h2 className='heading_l my-6'>Recommended For You</h2>
			<div className='flex flex-wrap gap-10'>
				<RecommendationCards />
			</div>
		</section>
	);
};

export default Recommendations;
