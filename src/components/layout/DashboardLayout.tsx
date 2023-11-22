"use client";
import LeftMenu from "@/components/layout/LeftMenu";
import SearchBar from "@/components/inputElements/SearchBar";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import EntertainmentCardProps from "@/redux/EntertainmentCardProp";

const DashboardLayout = ({ children }: any) => {
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
			let filteredList = EntertainmentList.filter((entertainmentCard) =>
				entertainmentCard.title.includes(searchTerm)
			);
			setSearchResults(filteredList);
		} else {
			setSearchResults([]);
		}
	}, [EntertainmentList, searchTerm]);

	return (
		<main>
			<div className='h-full dashboard_grid'>
				<LeftMenu />
				<div className='w-full pt-6 mr-8 overflow-x-hidden'>
					<SearchBar blurEvent={onSearch} searchTerm={searchTerm} />
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
