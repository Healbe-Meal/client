import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import App from "../../types/App";
import Component from ".";
import app from "../../store/actions/app";

function mapStateToProps(state: CombinedState<{ app: App }>) {
	return {
		energyIn: state.app.energyIn,
		energyOut: state.app.energyOut,
		energyNorm: state.app.norms.calories,
		daysInMonth: state.app.daysInMonth,
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
