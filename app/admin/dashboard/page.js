import prismadb from "@/lib/prismadb";
import Link from "next/link";

export default function Page() {
	// const users = await prismadb.user.findMany();

	return (
		<div>
			<div className="space-y-2">
				<p className="text-4xl font-semibold space-y-2">
					Lorem ipsum dolor sit amet consectetur.
				</p>
				<p className="text-xl">Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
					nemo harum corrupti ea id libero provident aspernatur omnis
					repudiandae enim vel consequuntur delectus tempora praesentium quam
					voluptatem, numquam sunt fuga. Distinctio laudantium consectetur
					pariatur autem doloribus officia enim repellat numquam officiis porro
					sequi, libero, tenetur beatae tempore odio non nihil labore impedit
					explicabo. Architecto suscipit voluptates eveniet quis excepturi, quod
					accusantium odio alias nulla numquam. Nesciunt alias accusamus officia
					praesentium deserunt saepe excepturi.
				</p>
				<p>
					Nihil nostrum odit eligendi dolores eum iusto illo necessitatibus
					voluptatem accusantium animi! Obcaecati quo rem consectetur illo quas
					incidunt ad ducimus ratione earum eum? Facere excepturi deserunt in
					enim commodi voluptatibus tenetur quos, minus delectus, ad sint saepe,
					neque reiciendis adipisci libero? Perferendis nulla quibusdam neque.
					Asperiores cupiditate quam vitae reprehenderit modi maxime voluptate
					id quia fuga sequi! Amet ab sapiente recusandae animi unde assumenda
					similique, laboriosam obcaecati quibusdam eos atque ex neque tempore?
					In totam, inventore tempore id eos eaque aperiam optio facere dolor
					animi impedit mollitia sequi earum, eius, quaerat beatae! Minus ipsum
					voluptatem esse obcaecati voluptatum explicabo molestias, est vitae
					hic non cumque
				</p>
			</div>
		</div>
	);
}
