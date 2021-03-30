import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import App from "../../types/App";
import Component from ".";
import app from "../../store/actions/app";

function mapStateToProps(state: CombinedState<{ app: App }>) {
	return {
		heartRate: state.app.heartRate,
		norms: state.app.norms.heartRate,
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
