import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import style from "./style.module.css";

const Header = () => {
	return (
		<AppBar className={style.wrapper} position="static" color="inherit" elevation={0}>
			<Toolbar>
				<Typography className={style.title} variant="h5" noWrap>
					Healbe MeaL
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
