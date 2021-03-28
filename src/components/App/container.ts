import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import App from "../../types/App";
import Component from ".";
import app from "../../store/actions/app";

function mapStateToProps(state: CombinedState<{ app: App }>) {
	return {
		energyIn: state.app.energyIn,
		energyOut: state.app.energyOut,
		energyNorm: state.app.energyNorm!,
		heartRate: state.app.heartRate,
		steps: state.app.steps,
		weights: state.app.weight,
		user: state.app.user!,
		didGet: state.app.didGet,
		isLoader: state.app.isLoader,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		stopLoader: () => {
			dispatch(app.stopLoader());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
