import React from "react";
import { XYPlot, Hint, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries } from "react-vis";
import Point from "../../types/Point";
import style from "./style.module.css";

type Props = {
	steps: Point[];
	daysInMonth: number[];
};

const Steps: React.FC<Props> = (props: Props) => {
	const [steps, setSteps] = React.useState<any>(null);

	const handleSteps = (v: any) => setSteps(v);
	const clearSteps = () => setSteps(null);

	return (
		<div className={style.wrapper}>
			<h2 className={style.header}>Шаги и дистанция</h2>
			<XYPlot
				className={style.plot}
				height={400}
				width={window.innerWidth - 200}
				margin={{ left: 50, right: 10, top: 10, bottom: 40 }}
			>
				{steps ? (
					<Hint value={steps}>
						<div className={style.hint}>
							<div className={style.hintItem}>{steps.y} шагов</div>
							<div className={style.hintItem}>{Math.floor(steps.y * 0.7)} метров</div>
						</div>
					</Hint>
				) : (
					<></>
				)}

				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis tickValues={props.daysInMonth} />
				<YAxis />
				<VerticalBarSeries
					barWidth={0.3}
					color="#518ce9"
					data={props.steps}
					onValueMouseOver={handleSteps}
					onValueMouseOut={clearSteps}
				/>
			</XYPlot>
		</div>
	);
};

export default Steps;
