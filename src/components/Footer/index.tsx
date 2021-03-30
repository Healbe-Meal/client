import React from "react";
import style from "./style.module.css";

const Footer = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.box}>healbe_meal@mail.ru</div>
			<div className={style.box}>Версия 1.1</div>
			<div className={style.box}>Команда “5 G класс”</div>
		</div>
	);
};

export default Footer;
