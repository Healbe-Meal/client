import React from "react";
import style from "./style.module.css";

import FileForm from "../FileForm/container";
import Point from "../../types/Point";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Calories from "../Calories";
import HeartRate from "../HeartRate";
import User from "../../types/User";
import { CircularProgress } from "@material-ui/core";
import Steps from "../Steps";
import Weight from "../Weight";

type Props = {
	energyOut: Point[][];
	energyIn: Point[][];
	energyNorm: number;
	heartRate: Point[][];
	steps: Point[][];
	weights: Point[][];
	user: User;

	didGet: boolean;

	isLoader: boolean;
	stopLoader: () => void;
};

const App = (props: Props) => {
	React.useEffect(() => {
		if (props.isLoader) {
			const timeout = setTimeout(() => {
				props.stopLoader();
			}, 3000);

			return () => clearTimeout(timeout);
		}
	}, [props, props.isLoader]);

	return (
		<div className={style.wrapper}>
			{!props.didGet ? (
				<>
					<h1 className={style.healbe}>HealBe Meal</h1>
					<h2 className={style.healbeH2}>Сервис визуализации данных о здоровье</h2>
					<h3 className={style.healbeH3}>
						Сервис работает с данными, предоставленными фитнес-браслетами HealBe первого, второго и третьего поколений
					</h3>

					<FileForm />
				</>
			) : (
				<></>
			)}

			{props.isLoader ? (
				<div className={style.loader}>
					<CircularProgress />
				</div>
			) : (
				<>
					{props.didGet ? (
						<>
							<h1>Февраль 2021</h1>
							<div className={style.user}>
								<h2>Данные пользователя</h2>
								<div>Имя: Михаил Парфентьев</div>
								<div>Возраст: 31</div>
								<div>Пол: Мужской</div>
								<div>Рост: {props.user.height} см</div>
							</div>

							<Calories energyNorm={props.energyNorm} energyIn={props.energyIn} energyOut={props.energyOut} />
							<HeartRate heartRate={props.heartRate} />
							<Steps steps={props.steps} />
							<Weight weights={props.weights} />
						</>
					) : (
						<></>
					)}
				</>
			)}
		</div>
	);
};

export default App;
