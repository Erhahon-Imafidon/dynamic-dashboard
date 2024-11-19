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
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={chartData}>
                    <Tooltip
                        contentStyle={{
                            background: '#2a3447',
                            borderRadius: '5px',
                        }}
                        labelStyle={{ display: 'none' }}
                    />
                    <Bar dataKey={dataKey} fill={color} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default BarChartBox;
