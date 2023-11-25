"use client";
import Card from "@/components/common/Card";
import EntertainmentCardProps from "@/redux/EntertainmentCardProp";
import { RootState } from "@/redux/store";
import STRINGS from "@/utils/string";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookmarksSection = () => {
	const [bookmarkMovies, setBookmarkMovies] = useState<
		EntertainmentCardProps[]
	>([]);
	const [bookmarkTV, setBookmarkTV] = useState<EntertainmentCardProps[]>([]);

	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const bookmarkMoviesHandler = () => {
		let movies = EntertainmentList.filter(
			(entertainmentCard) =>
				entertainmentCard.category === "Movie" && entertainmentCard.isBookmarked
		);
		setBookmarkMovies(movies);
	};

	const bookmarkTVSeriesHandler = () => {
		let tvShows = EntertainmentList.filter(
			(entertainmentCard) =>
				entertainmentCard.category === "TV Series" &&
				entertainmentCard.isBookmarked
		);
		setBookmarkTV(tvShows);
	};

	useEffect(() => {
		bookmarkMoviesHandler();
		bookmarkTVSeriesHandler();
	}, []);

	return (
		<>
			{bookmarkMovies.length > 0 && (
				<section>
					<h2 className=' heading_l my-6'>{STRINGS.pages.bookmarks.movies}</h2>
					<div className='flex flex-wrap gap-10'>
						{bookmarkMovies.map((entertainmentCard, index) => {
							return <Card key={index} {...entertainmentCard} />;
						})}
					</div>
				</section>
			)}

			{bookmarkTV.length > 0 && (
				<section>
					<h2 className=' heading_l my-6'>{STRINGS.pages.bookmarks.tvShows}</h2>
					<div className='flex flex-wrap gap-10'>
						{bookmarkTV.map((entertainmentCard, index) => {
							return <Card key={index} {...entertainmentCard} />;
						})}
					</div>
				</section>
			)}
		</>
	);
};

export default BookmarksSection;
