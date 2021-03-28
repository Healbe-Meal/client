import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../actions/ACTION";
import axios from "axios";
import App from "../../types/App";

async function send(file: any): Promise<App> {
	console.log(file);

	return await axios
		.post("http://localhost:8100/parse", file, {
			headers: { "Content-Type": "multipart/form-data" },
		})
		.then((response) => {
			if (response.status === 200) {
				return response.data;
			}
		});
}

function* worker(action: AnyAction) {
	const data: App = yield call(send, action.payload);
	console.log(data);
}

function* watchSendFile() {
	yield takeLatest(ACTION.SEND_FILE, worker);
}

export default watchSendFile;
