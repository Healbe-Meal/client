import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import app from "../../store/actions/app";

function mapStateToProps(state: CombinedState<{}>) {
	return {};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		sendFile: (data: any) => {
			dispatch(app.sendFile(data));
		},
		startLoader: () => {
			dispatch(app.startLoader());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
