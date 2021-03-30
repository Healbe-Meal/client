import React from "react";
import style from "./style.module.css";
import { Hint, HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";
import Point from "../../types/Point";

type Props = {
	heartRate: Point[];
	norms: number[];
	daysInMonth: number[];
};

const HeartRate: React.FC<Props> = (props: Props) => {
	const [selectedBar, setSelectedBar] = React.useState<any>(null);

	const minNormData = [];
	const normData = [];
	for (let i = 1; i < props.daysInMonth.length + 1; i++) {
		minNormData.push({ x: i, y: props.norms[0] });
		normData.push({ x: i, y: props.norms[1] });
	}

	const [isHoveringMinNorm, setHoveringMinNorm] = React.useState(false);
	const [minNorm, setMinNorm] = React.useState<any>(null);

	const handleMinNorm = (v: any) => setMinNorm(v);
	const clearMinNorm = () => setMinNorm(null);
	const handleHoveringMinNorm = (is: boolean) => setHoveringMinNorm(is);

	const [isHoveringNorm, setHoveringNorm] = React.useState(false);
	const [norm, setNorm] = React.useState<any>(null);

	const handleNorm = (v: any) => setNorm(v);
	const clearNorm = () => setNorm(null);
	const handleHoveringNorm = (is: boolean) => setHoveringNorm(is);

	const handleSelectedBar = (v: any) => {
		setSelectedBar(v);
	};

	return (
		<div className={style.wrapper}>
			<h2 className={style.header}>Пульс</h2>
			<XYPlot className={style.plot} height={400} yDomain={[0, 240]} width={window.innerWidth - 200}>
				{selectedBar ? (
					<Hint value={selectedBar}>
						<div className={style.hint}>
							<div className={style.hintItem}>Средний пульс: {selectedBar.y} уд/мин</div>
						</div>
					</Hint>
				) : (
					<></>
				)}

				{minNorm && isHoveringMinNorm && (
					<Hint value={minNorm}>
						<div className={style.hint}>
							<div className={style.hintItem}>Нижняя граница нормы: {minNorm.y} уд/мин</div>
						</div>
					</Hint>
				)}

				{norm && isHoveringNorm && (
					<Hint value={norm}>
						<div className={style.hint}>
							<div className={style.hintItem}>Верхняя граница нормы: {norm.y} уд/мин</div>
						</div>
					</Hint>
				)}

				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis tickValues={props.daysInMonth} />
				<YAxis />
				<LineSeries color="green" data={props.heartRate} onNearestX={handleSelectedBar} />

				<LineSeries
					data={minNormData}
					className={style.norm}
					color={"red"}
					onNearestXY={handleMinNorm}
					onSeriesMouseOver={() => {
						handleHoveringMinNorm(true);
					}}
					onSeriesMouseOut={() => {
						handleHoveringMinNorm(false);
						clearMinNorm();
					}}
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

export default HeartRate;
