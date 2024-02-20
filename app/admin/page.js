import UsersCard from "@/app/components/admin/UsersCard";
import PortfolioCard from "@/app/components/admin/PortfolioCard";
import ProductsCard from "@/app/components/admin/ProductsCard";

export default function Page() {
	return (
		<div>
			<UsersCard />
			<PortfolioCard />
			<ProductsCard />
		</div>
	);
}
