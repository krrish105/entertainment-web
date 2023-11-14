import Card from "@/components/common/Card";
import TrendingCard from "@/components/common/trendingCard";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
	return (
		<main>
			<DashboardLayout>
				<section>
					<h2 className='heading_l my-6'>Trending</h2>
					<div>
						{/* Trending Card */}
						<TrendingCard />
					</div>
				</section>
				<section>
					<h2 className='heading_l my-6'>Recommended For You</h2>
					<div>
						{/* Trending Card */}
						<Card />
					</div>
				</section>
			</DashboardLayout>
		</main>
	);
}
