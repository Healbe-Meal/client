import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import App from "../../types/App";
import Component from ".";
import app from "../../store/actions/app";

function mapStateToProps(state: CombinedState<{ app: App }>) {
	return {
		alert: state.app.alert!,
		isAlert: state.app.isAlert,
		month: state.app.month!,
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

		cleanAlert: () => {
			dispatch(app.cleanAlert());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
