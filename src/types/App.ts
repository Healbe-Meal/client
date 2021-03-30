import Month from "./Month";
import Norms from "./Norms";
import Point from "./Point";
import User from "./User";

type App = {
	energyIn: Point[];
	energyOut: Point[];
	heartRate: Point[];
	weights: Point[];
	steps: Point[];
	user?: User;

	norms: Norms;

	month?: Month;
	daysInMonth: number[];

	didGet: boolean;
	isLoader: boolean;
};

export default App;
