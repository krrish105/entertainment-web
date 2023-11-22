import Image from "next/image";

const SearchBar = ({ blurEvent, searchTerm }: any) => {
	return (
		<div className='flex gap-6 search w-full'>
			<Image
				src='/vectors/icon-search.svg'
				alt='Search'
				width={28}
				height={28}
				className='not_h_auto'
			/>
			<input
				type='search'
				name=''
				id=''
				placeholder='Search for movies or TV series'
				className='w-full'
				onChange={(e) => blurEvent(e.target.value)}
				value={searchTerm}
			/>
		</div>
	);
};
export default SearchBar;
