import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './piechartbox.scss';

const data = [
    { name: 'Mobile', value: 400, color: '#0088FE' },
    { name: 'Desktop', value: 300, color: '#00C49F' },
    { name: 'Laptop', value: 300, color: '#FFBB28' },
    { name: 'Tablet', value: 200, color: '#FF8042' },
];

const PieChartBox = () => {
    return (
        <section className="pieChart">
            <h1>Leads by Source</h1>
            <div className="chart">
                <ResponsiveContainer width={'99%'} height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                borderRadius: '5px',
                            }}
                        />
                        <Pie
                            data={data}
                            dataKey="value"
                            paddingAngle={5}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div
                                className="dot"
                                style={{ backgroundColor: item.color }}
                            />
                            <p>{item.name}</p>
                        </div>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PieChartBox;
