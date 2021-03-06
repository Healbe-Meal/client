import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../actions/ACTION";
import axios from "axios";
import App from "../../types/App";
import app from "../actions/app";

async function send(file: any): Promise<App | null> {
	return await axios
		.post("http://178.176.224.205:22202/parse", file, {
			headers: { "Content-Type": "multipart/form-data" },
		})
		.then((response) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		.catch((err) => null);
}

function* worker(action: AnyAction) {
	const data: App = yield call(send, action.payload);

	if (data === null) {
		yield put(app.setAlert({ message: "Невозможно обработать файл", title: "Ошибка", severity: "error" }));
	} else {
		yield put(app.setData(data));
	}

	yield put(app.stopLoader());
}

function* watchSendFile() {
	yield takeLatest(ACTION.SEND_FILE, worker);
}

export default watchSendFile;
