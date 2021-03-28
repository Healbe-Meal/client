import Point from "./Point";
import User from "./User";

type App = {
	energyIn: Point[][];
	energyOut: Point[][];
	heartRate: Point[][];
	weight: Point[][];
	steps: Point[][];
	user?: User;

	energyNorm?: number;

	didGet: boolean;
	isLoader: boolean;
};

export default App;
