import './chartBox.scss';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

type ChartBoxProps = {
    icon: string;
    title: string;
    number: number | string;
    chartData: object[];
    dataKey: string;
    color: string;
    percentage: number;
};

const ChartBox = ({
    chartData,
    dataKey,
    icon,
    color,
    number,
    title,
    percentage,
}: ChartBoxProps) => {
    return (
        <section className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={icon} alt="icon" />
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
                <Link to="/" style={{ color: color }}>
                    View all
                </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: 'transparent',
                                    border: 'none',
                                }}
                                labelStyle={{ display: 'none' }}
                                position={{ x: 60, y: 60 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text">
                    <p
                        className="percentage"
                        style={{
                            color: percentage < 0 ? 'tomato' : 'limegreen',
                        }}
                    >
                        {percentage}%
                    </p>
                    <p className="duration">this month</p>
                </div>
            </div>
        </section>
    );
};

export default ChartBox;
