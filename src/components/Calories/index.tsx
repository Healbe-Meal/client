import React from "react";
import {
	DiscreteColorLegend,
	Hint,
	HorizontalGridLines,
	LineSeries,
	VerticalBarSeries,
	VerticalGridLines,
	XAxis,
	XYPlot,
	YAxis,
} from "react-vis";
import Point from "../../types/Point";
import style from "./style.module.css";

type Props = {
	energyIn: Point[];
	energyOut: Point[];
	energyNorm: number;
	daysInMonth: number[];
};

const Calories: React.FC<Props> = (props: Props) => {
	const [burntCals, setBurntCals] = React.useState<any>(null);
	const [cals, setCals] = React.useState<any>(null);

	const [isHoveringNorm, setHoveringNorm] = React.useState(false);
	const [norm, setNorm] = React.useState<any>(null);

	const handleBurntCals = (v: any) => setBurntCals(v);
	const clearBurntCals = () => setBurntCals(null);

	const handleCals = (v: any) => setCals(v);
	const clearCals = () => setCals(null);

	const handleNorm = (v: any) => setNorm(v);
	const clearNorm = () => setNorm(null);

	const handleHoveringNorm = (is: boolean) => setHoveringNorm(is);

	const normData: Point[] = [];
	for (let i = 1; i < props.daysInMonth.length + 1; i++) normData.push({ x: i, y: props.energyNorm });

	return (
		<div>
			<h2>Энергобаланс</h2>
			<p>* Суточная потребность пользователя в калориях подсчитана по рекомендациям ВОЗ</p>
			<XYPlot
				className={style.plot}
				xDomain={[1, 31]}
				height={400}
				width={window.innerWidth - 200}
				margin={{ left: 50, right: 10, top: 10, bottom: 40 }}
			>
				<DiscreteColorLegend
					orientation="horizontal"
					items={[
						{
							title: "Усвоенные калории",
							color: "#518ce9",
						},
						{
							title: "Потраченные калории",
							color: "#f2b658",
						},
					]}
				/>

				{burntCals && (
					<Hint value={burntCals}>
						<div className={style.hint}>
							<div>День: {burntCals.x}</div>
							<div className={style.hintItem}>Потрачено: {burntCals.y} Ккал</div>
						</div>
					</Hint>
				)}

				{cals && (
					<Hint value={cals}>
						<div className={style.hint}>
							<div className={style.hintItem}>Усвоено: {cals.y} Ккал</div>
						</div>
					</Hint>
				)}

				{norm && isHoveringNorm && (
					<Hint value={norm}>
						<div className={style.hint}>
							<div className={style.hintItem}>Суточная потребность в калориях: {norm.y} Ккал</div>
						</div>
					</Hint>
				)}

				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis tickValues={props.daysInMonth} />
				<YAxis />

				<VerticalBarSeries
					barWidth={0.7}
					color="#518ce9"
					data={props.energyIn}
					onValueMouseOver={handleCals}
					onValueMouseOut={clearCals}
				/>
				<VerticalBarSeries
					barWidth={0.7}
					color="#f2b658"
					data={props.energyOut}
					onValueMouseOver={handleBurntCals}
					onValueMouseOut={clearBurntCals}
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

export default Calories;
