import { createSlice } from "@reduxjs/toolkit";
import entertainmentData from "../../../public/data.json";

type Entertainment = {
	title: string;
	thumbnail: any;
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
};

type EntertainmentState = {
	list: Entertainment[];
};

const initialState: EntertainmentState = {
	list: entertainmentData,
};
export const entertainment = createSlice({
	name: "entertainment",
	initialState,
	reducers: {
		// getStateAccordingToPayloadCategory: (state, action) => {
		// 	state.list.map(
		// 		(entertainment) => entertainment.category === action.payload
		// 	);
		// },
		// getMovies: (state, action) => {
		// 	state.list.map(
		// 		(entertainment) => entertainment.category === action.payload
		// 	);
		// },
		// getTVShows: (state, action) => {
		// 	state.list.map(
		// 		(entertainment) => entertainment.category === action.payload
		// 	);
		// },
		// getRecommended: (state, action) => {
		// 	state.list;
		// },
		// getTrending: (state, action) => {
		// 	state.list.map((entertainment) => entertainment.isTrending);
		// },
		// getBookmarked: (state, action) => {
		// 	state.list.map((entertainment) => entertainment.isBookmarked);
		// },
		setBookmark: (state, action) => {
			const entertainment = state.list.find(
				(entertainment) => entertainment.title === action.payload
			);
			if (entertainment) {
				entertainment.isBookmarked = !entertainment.isBookmarked;
			}
		},
	},
});

export const {
	// getStateAccordingToPayloadCategory,
	// getRecommended,
	// getTrending,
	// getBookmarked,
	setBookmark,
} = entertainment.actions;
export default entertainment.reducer;
