import Image from "next/image";

const Card = () => {
	return (
		<div className='rounded-lg flex flex-col w-fit'>
			<div className='relative'>
				<Image
					src='/assets/thumbnails/beyond-earth/trending/large.jpg'
					alt=''
					width={360}
					height={300}
					className='rounded-lg'
				/>
				<div className='overlay absolute inset-0 -z-10'></div>
			</div>

			<div className='mb-6 mt-3 text-brandWhite'>
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
export default Card;
