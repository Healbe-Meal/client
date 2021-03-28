import { AnyAction } from "redux";
import ACTION from "./ACTION";

function sendFile(file: any): AnyAction {
	return {
		type: ACTION.SEND_FILE,
		payload: file,
	};
}

function startLoader(): AnyAction {
	return {
		type: ACTION.START_LOADER,
	};
}

function stopLoader(): AnyAction {
	return {
		type: ACTION.STOP_LOADER,
	};
}

export default { sendFile, startLoader, stopLoader };
