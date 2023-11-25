import Image from "next/image";

const SearchBar = ({ blurEvent, searchTerm, placeholder }: any) => {
	return (
		<div className='flex gap-4 search w-full lg:gap-6'>
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
				placeholder={placeholder}
				className='w-full'
				onChange={(e) => blurEvent(e.target.value)}
				value={searchTerm}
			/>
		</div>
	);
};
export default SearchBar;
