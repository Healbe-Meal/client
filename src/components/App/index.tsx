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
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import AlertT from "../../types/Alert";

type Props = {
	alert: AlertT;
	isAlert: boolean;
	cleanAlert: () => void;

	month: Month;
	user: User;
	didGet: boolean;
	isLoader: boolean;
	stopLoader: () => void;
};

const App = (props: Props) => {
	React.useEffect(() => {
		if (props.isAlert) {
			const timeout = setTimeout(() => {
				props.cleanAlert();
			}, 3000);

			return () => clearTimeout(timeout);
		}
	}, [props, props.isAlert]);

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
									<h1>{props.month.name} 2021</h1>
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

			<div className={style.alert_wrapper}>
				<Collapse in={props.isAlert}>
					<Alert severity={props.alert.severity}>
						{props.alert.title ? <AlertTitle>{props.alert.title}</AlertTitle> : <></>}
						{props.alert.message}
					</Alert>
				</Collapse>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default App;
