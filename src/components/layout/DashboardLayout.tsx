"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EntertainmentCardProps from "@/redux/EntertainmentCardProp";
import STRINGS from "@/utils/string";
import LeftMenu from "@/components/layout/LeftMenu";
import SearchBar from "@/components/inputElements/SearchBar";
import Card from "@/components/common/Card";

const DashboardLayout = ({ children }: any) => {
	let path = usePathname().substring(1);
	path = path === "" ? "home" : path;
	let pathname = path as keyof typeof STRINGS.pages;

	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] =
		useState<EntertainmentCardProps[]>();
	const EntertainmentList = useSelector(
		(state: RootState) => state.entertainmentSlice.list
	);

	const onSearch = (value: string) => {
		setSearchTerm(value.trim());
	};

	useEffect(() => {
		if (searchTerm !== "") {
			let filteredList = EntertainmentList.filter((entertainmentCard) => {
				let isCardValid = false;
				if (pathname === "movies") {
					isCardValid =
						entertainmentCard.category === "Movie" &&
						entertainmentCard.title
							.toLowerCase()
							.includes(searchTerm.toLowerCase());
				} else if (pathname === "tvSeries") {
					isCardValid =
						entertainmentCard.category === "TV Series" &&
						entertainmentCard.title
							.toLowerCase()
							.includes(searchTerm.toLowerCase());
				} else {
					isCardValid = entertainmentCard.title
						.toLowerCase()
						.includes(searchTerm.toLowerCase());
				}
				return isCardValid;
			});
			setSearchResults(filteredList);
		} else {
			setSearchResults([]);
		}
	}, [EntertainmentList, pathname, searchTerm]);

	return (
		<main>
			<div className='h-full dashboard_grid'>
				<LeftMenu />
				<div className='w-full pt-6 px-4 overflow-x-hidden lg:px-0 lg:mr-8'>
					<SearchBar
						blurEvent={onSearch}
						searchTerm={searchTerm}
						placeholder={STRINGS.pages[pathname]?.searchPlaceholder}
					/>
					{searchTerm === "" && <div className='main_content'>{children}</div>}
					{searchTerm !== "" && (
						<section>
							<h2 className='heading_l my-6'>
								Found {searchResults?.length} results for ‘{searchTerm}’
							</h2>
							{searchTerm !== "" && !searchResults?.length ? (
								<span>No results found</span>
							) : (
								<div className='flex flex-wrap gap-10'>
									{searchResults?.map((entertainmentCard, index) => {
										return <Card key={index} {...entertainmentCard} />;
									})}
								</div>
							)}
						</section>
					)}
				</div>
			</div>
		</main>
	);
};
export default DashboardLayout;
