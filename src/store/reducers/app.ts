import { AnyAction } from "redux";
import App from "../../types/App";
import Point from "../../types/Point";
import ACTION from "../actions/ACTION";
import initialState from "../states/app";

const prepareData = (points: Point[], daysInMonth: number[]): Point[] => {
	console.log(points);
	const data: Point[] = [];
	let k = 0;
	daysInMonth.forEach((i: number) => {
		if (k < points.length && i === points[k].x) {
			data.push({ x: i, y: points[k].y, description: points[k].description });
			k++;
		} else {
			data.push({ x: i, y: 0 });
		}
	});
	return data;
};

function app(state: App = initialState, action: AnyAction): App {
	switch (action.type) {
		case ACTION.START_LOADER:
			return {
				...state,
				isLoader: true,
			};

		case ACTION.SET_DATA:
			const daysInMonth: number[] = [];
			for (let i = 1; i < action.payload.month.numOfDays + 1; i++) daysInMonth.push(i);

			const heartRateNorms = action.payload.standartResult.pulseStandart.split("-");

			return {
				...state,
				energyIn: prepareData(action.payload.energyIn, daysInMonth),
				energyOut: prepareData(action.payload.energyOut, daysInMonth),
				heartRate: action.payload.heartRate,
				weights: prepareData(
					action.payload.weight.map((weight: Point) => ({ x: weight.x, y: Math.floor(weight.y) })),
					daysInMonth
				),
				steps: prepareData(action.payload.steps, daysInMonth),
				user: action.payload.user,
				month: action.payload.month,
				daysInMonth: daysInMonth,
				norms: {
					calories: action.payload.standartResult.energyInStandart,
					heartRate: heartRateNorms.map((el: string) => Number(el)),
					imt: {
						norm: (21.75 * (action.payload.user.height * action.payload.user.height)) / 10000,
						description: action.payload.standartResult.imt,
					},
				},

				didGet: true,
			};

		case ACTION.STOP_LOADER:
			return {
				...state,
				isLoader: false,
			};

		case ACTION.SET_ALERT:
			return {
				...state,
				isAlert: true,
				alert: action.payload,
			};
		case ACTION.CLEAN_ALERT:
			return {
				...state,
				isAlert: false,
			};
	}
	return state;
}

export default app;
