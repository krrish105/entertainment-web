import BookmarkIcon from "@/components/common/BookmarkIcon";
import Image from "next/image";
import EntertainmentCardProps from "@/redux/EntertainmentCardProp";

const TrendingCard = ({ ...props }: EntertainmentCardProps) => {
	return (
		<div className='trending_card rounded-lg relative flex items-end h-[230px] max-w-md'>
			<Image
				src={props.thumbnail.trending.large}
				alt=''
				width={470}
				height={230}
				className='rounded-lg absolute inset-0 -z-10'
			/>
			<div className='overlay absolute inset-0 -z-10'></div>
			<div className='mb-6 ml-6 text-brandWhite'>
				<ul className='card_tags'>
					<li>{props.year}</li>
					<li>
						<Image
							src='/vectors/icon-category-movie.svg'
							alt=''
							width={12}
							height={12}
							className='not_h_auto'
						/>
						{props.category}
					</li>
					<li>{props.rating}</li>
				</ul>
				<span className='heading_m font-medium'>{props.title}</span>
			</div>
			<BookmarkIcon title={props.title} isBookmarked={props.isBookmarked} />
		</div>
	);
};
export default TrendingCard;
