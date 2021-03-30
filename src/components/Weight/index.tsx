import React from "react";
import {
	XYPlot,
	Hint,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	VerticalBarSeries,
	LineSeries,
} from "react-vis";
import IMT from "../../types/IMT";
import Point from "../../types/Point";
import style from "./style.module.css";

type Props = {
	weights: Point[];
	imt: IMT;
	daysInMonth: number[];
};

const Weight: React.FC<Props> = (props: Props) => {
	const [weight, setWeight] = React.useState<any>(null);

	const handleWeight = (v: any) => setWeight(v);
	const clearWeight = () => setWeight(null);

	const [isHoveringNorm, setHoveringNorm] = React.useState(false);
	const [norm, setNorm] = React.useState<any>(null);

	const normData = [];
	for (let i = 1; i < props.daysInMonth.length + 1; i++) normData.push({ x: i, y: props.imt.norm });

	const handleNorm = (v: any) => setNorm(v);
	const clearNorm = () => setNorm(null);

	const handleHoveringNorm = (is: boolean) => setHoveringNorm(is);

	return (
		<div className={style.wrapper}>
			<h2 className={style.header}>Вес</h2>
			<XYPlot className={style.plot} height={400} xDomain={[1, 28]} yDomain={[0, 200]} width={window.innerWidth - 200}>
				{weight && (
					<Hint value={weight}>
						<div className={style.hint}>
							<div className={style.hintItem}>{Math.floor(weight.y)} кг</div>
						</div>
					</Hint>
				)}

				{norm && isHoveringNorm && (
					<Hint value={norm}>
						<div className={style.hint}>
							<div className={style.hintItem}>Норма веса: {norm.y} кг</div>
							<div className={style.hintItem}>ИМТ: {props.imt.description}</div>
						</div>
					</Hint>
				)}

				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis tickValues={props.daysInMonth} />
				<YAxis />
				<VerticalBarSeries
					color={"#e08ae8"}
					className={style.bar}
					barWidth={0.5}
					data={props.weights}
					onValueMouseOver={handleWeight}
					onValueMouseOut={clearWeight}
				/>
				<LineSeries
					data={normData}
					className={style.norm}
					color={"red"}
					onNearestXY={handleNorm}
					onSeriesMouseOver={() => {
						handleHoveringNorm(true);
					}}
					onSeriesMouseOut={() => {
						handleHoveringNorm(false);
						clearNorm();
					}}
				/>
			</XYPlot>
		</div>
	);
};

export default Weight;
