const STRINGS = {
	metadata: {
		home: {
			title: "Entertainment Web App",
			description: "",
		},
		movies: {
			title: "Movies | Entertainment Web App",
			description: "",
		},
		tvShows: {
			title: "TV Series | Entertainment Web App",
			description: "",
		},
		bookmarks: {
			title: "Bookmarks | Entertainment Web App",
			description: "",
		},
	},
	common: {
		appName: "Entertainment Web App",
		navigation: [
			{
				path: "/",
				title: "Home",
				image: "/vectors/icon-nav-home.svg",
			},
			{
				path: "/movies",
				title: "Movies",
				image: "/vectors/icon-nav-movies.svg",
			},
			{
				path: "/tvSeries",
				title: "TV Series",
				image: "/vectors/icon-nav-tv-series.svg",
			},
			{
				path: "/bookmarks",
				title: "Bookmarks",
				image: "/vectors/icon-nav-bookmark.svg",
			},
		],
	},
	component: {
		trending: {
			heading: "Trending",
		},
		recommendations: {
			heading: "Recommended For You",
		},
	},
	pages: {
		home: {
			heading: "Home",
			searchPlaceholder: "Search for movies or TV series",
		},
		movies: {
			heading: "Movies",
			searchPlaceholder: "Search for movies",
		},
		tvSeries: {
			heading: "TV Series",
			searchPlaceholder: "Search for TV series",
		},
		bookmarks: {
			heading: "Bookmarks",
			movies: "Bookmarked Movies",
			tvShows: "Bookmarked TV Series",
			searchPlaceholder: "Search for bookmarked shows",
		},
	},
};

export default STRINGS;
