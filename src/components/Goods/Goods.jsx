import { Container } from "../../views/Container/Container.jsx";
import { CardItem } from "../CardItem/CardItem.jsx";
import s from "./Goods.module.scss";

export const Goods = () => (
	<section className={s.goods}>
		<Container>
			<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
			<ul className={s.list}>
				<li>
					<CardItem />
				</li>
			</ul>
		</Container>
	</section>
);
