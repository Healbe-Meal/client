import React from "react";
import style from "./style.module.css";

import Point from "../../types/Point";
import Calories from "../Calories";
import HeartRate from "../HeartRate";
import User from "../../types/User";
import { CircularProgress } from "@material-ui/core";
import Steps from "../Steps";
import Weight from "../Weight";
import Main from "../Main";
import Footer from "../Footer";
import Header from "../Header";

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
			<Header />

			<div>
				{!props.didGet ? <Main /> : <></>}

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

			<Footer />
		</div>
	);
};

export default App;
