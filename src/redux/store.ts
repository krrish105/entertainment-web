import { configureStore } from "@reduxjs/toolkit";
import entertainmentSlice from "@/redux/features/entertainment-slice";

export const store = configureStore({
	reducer: {
		entertainmentSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
