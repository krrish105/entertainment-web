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

export const { setBookmark } = entertainment.actions;
export default entertainment.reducer;
