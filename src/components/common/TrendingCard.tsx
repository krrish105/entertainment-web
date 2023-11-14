import Image from "next/image";

const TrendingCard = () => {
	return (
		<div className='trending_card rounded-lg relative flex items-end h-[230px] max-w-md'>
			<Image
				src='/assets/thumbnails/beyond-earth/trending/large.jpg'
				alt=''
				width={470}
				height={230}
				className='rounded-lg absolute inset-0 -z-10'
			/>
			<div className='overlay absolute inset-0 -z-10'></div>
			<div className='mb-6 ml-6 text-brandWhite'>
				<ul className='card_tags'>
					<li>2019</li>
					<li>
						<Image
							src='/vectors/icon-category-movie.svg'
							alt=''
							width={12}
							height={12}
							className='not_h_auto'
						/>
						Movie
					</li>
					<li>PG</li>
				</ul>
				<span className='heading_m font-medium'>Beyond Earth</span>
			</div>
		</div>
	);
};
export default TrendingCard;
