import BookmarkIcon from "@/components/common/BookmarkIcon";
import Image from "next/image";
import EntertainmentCardProps from "@/redux/EntertainmentCardProp";

const Card = ({ ...props }: EntertainmentCardProps) => {
	return (
		<div className='rounded-lg flex flex-col w-fit'>
			<div className='relative'>
				<Image
					src={props.thumbnail.regular.large}
					alt=''
					width={300}
					height={300}
					className='rounded-lg'
				/>
				<div className='overlay absolute inset-0 -z-10'></div>
				<BookmarkIcon title={props.title} isBookmarked={props.isBookmarked} />
			</div>

			<div className='mb-6 mt-3 text-brandWhite'>
				<ul className='card_tags'>
					<li>{props.year}</li>
					<li>
						<Image
							src={
								props.category === "Movie"
									? "/vectors/icon-category-movie.svg"
									: "/vectors/icon-category-tv.svg"
							}
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
		</div>
	);
};
export default Card;
