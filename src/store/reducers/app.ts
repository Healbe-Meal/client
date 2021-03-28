import { AnyAction } from "redux";
import App from "../../types/App";
import ACTION from "../actions/ACTION";
import initialState from "../states/app";
import energyIn from "./energyIn";
import energyNorm from "./energyNorm";
import energyOut from "./energyOut";
import heartRate from "./heartRate";
import steps from "./steps";
import user from "./user";
import weight from "./weight";

function app(state: App = initialState, action: AnyAction): App {
	switch (action.type) {
		case ACTION.START_LOADER:
			return {
				...state,
				isLoader: true,
			};

		case ACTION.STOP_LOADER:
			return {
				...state,
				energyIn: energyIn,
				energyOut: energyOut,
				heartRate: heartRate,
				steps: steps,
				weight: weight,
				user: user,
				energyNorm: energyNorm,
				didGet: true,
				isLoader: false,
			};
	}
	return state;
}

export default app;
