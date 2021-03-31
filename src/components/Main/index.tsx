import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import FileForm from "../FileForm/container";
import style from "./style.module.css";
import instruction1 from "../../assets/instructions/instruction1.png";
import instruction2 from "../../assets/instructions/instruction2.png";
import instruction3 from "../../assets/instructions/instruction3.png";
import instruction4 from "../../assets/instructions/instruction4.png";

const slides = [instruction1, instruction2, instruction3, instruction4];

const Main: React.FC = () => {
	const [page, setPage] = React.useState(1);
	const [slide, setSlide] = React.useState(slides[0]);
	React.useEffect(() => {
		const interval = setInterval(() => {
			setPage((page + 1) % slides.length);
			setSlide(slides[page]);
		}, 10000);

		return () => clearInterval(interval);
	});

	const nextSlide = () => {
		setPage((page + 1) % slides.length);
		setSlide(slides[page]);
	};

	return (
		<div className={style.wrapper}>
			<div className={style.infoWrapper}>
				<div className={style.box + " " + style.box1}>
					<div className={style.healbeH2}>Сервис визуализации данных о здоровье</div>

					<div className={style.healbeH3}>
						Сервис работает с данными, предоставленными фитнес-браслетами HealBe первого, второго и третьего поколений
					</div>
				</div>

				<div className={style.box + " " + style.box2}>
					<img src={slide} className={style.img} onClick={nextSlide} />
				</div>
			</div>

			<div className={style.fileForm}>
				<FileForm />
			</div>
		</div>
	);
};

export default Main;
