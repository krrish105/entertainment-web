import Image from "next/image";

const SearchBar = () => {
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
			/>
		</div>
	);
};
export default SearchBar;
