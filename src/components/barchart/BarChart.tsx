import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barChart.scss';

type barChartProps = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
};

const BarChartBox = ({ title, chartData, dataKey, color }: barChartProps) => {
    return (
        <section className="barChart">
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={chartData}>
                        <Tooltip
                            contentStyle={{
                                background: '#2a3447',
                                borderRadius: '5px',
                            }}
                            labelStyle={{ display: 'none' }}
                            cursor={{ fill: 'none' }}
                        />
                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default BarChartBox;
