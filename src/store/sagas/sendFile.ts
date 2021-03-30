import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../actions/ACTION";
import axios from "axios";
import App from "../../types/App";
import app from "../actions/app";

async function send(file: any): Promise<App> {
	return await axios
		.post("http://178.176.224.205:22202/parse", file, {
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

	yield put(app.setData(data));
	yield put(app.stopLoader());
}

function* watchSendFile() {
	yield takeLatest(ACTION.SEND_FILE, worker);
}

export default watchSendFile;
