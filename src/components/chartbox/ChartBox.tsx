import './chartBox.scss';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ChartBox = () => {
    return (
        <section className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src="https://via.placeholder.com/20" alt="icon" />
                    <span>Total Users</span>
                </div>
                <h1>11.28</h1>
                <Link to="/">View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
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
                                dataKey="pv"
                                stroke="#8884d8"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text">
                    <p className="percentage">45%</p>
                    <p className="duration">this month</p>
                </div>
            </div>
        </section>
    );
};

export default ChartBox;