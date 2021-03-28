import React from "react";
import style from "./style.module.css";
import { useDropzone } from "react-dropzone";

type Props = {
	sendFile: (data: any) => void;
	startLoader: () => void;
};

const FileForm: React.FC<Props> = (props: Props) => {
	const onDrop = React.useCallback((acceptedFiles) => {
		let data = new FormData();
		data.append("file", acceptedFiles[0]);
		console.log(data);
		props.sendFile(data);
		props.startLoader();
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className={style.dropzone} {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <p>Перетащите файл сюда</p> : <p>Перетащите сюда файлы или нажмите, чтобы выбрать</p>}
		</div>
	);
};

export default FileForm;
