import React from "react";
import style from "./style.module.css";

import Point from "../../types/Point";
import Calories from "../Calories/container";
import HeartRate from "../HeartRate/container";
import User from "../../types/User";
import { CircularProgress } from "@material-ui/core";
import Steps from "../Steps/container";
import Weight from "../Weight/container";
import Main from "../Main";
import Footer from "../Footer";
import Header from "../Header";
import Month from "../../types/Month";

type Props = {
	month: Month;
	user: User;
	didGet: boolean;
	isLoader: boolean;
	stopLoader: () => void;
};

const App = (props: Props) => {
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
								<div className={style.user}>
									<h1>
										{props.month.name} {props.month.year}
									</h1>
									<h2>Данные пользователя</h2>
									<div>Возраст: {props.user.age}</div>
									<div>Пол: {props.user.sex ? "Женский" : "Мужской"}</div>
									<div>Рост: {props.user.height} см</div>
								</div>

								<Calories />
								<HeartRate />
								<Steps />
								<Weight />
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
