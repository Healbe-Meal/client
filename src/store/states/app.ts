import App from "../../types/App";

const app: App = {
	isAlert: false,
	alert: {
		title: "",
		message: "",
	},

	energyIn: [],
	energyOut: [],
	heartRate: [],
	steps: [],
	weights: [],
	daysInMonth: [],
	norms: {
		calories: 0,
		heartRate: [],
		imt: {
			norm: 0,
			description: "",
		},
	},
	didGet: false,
	isLoader: false,
};

export default app;
