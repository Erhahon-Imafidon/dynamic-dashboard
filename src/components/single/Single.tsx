import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './single.scss';
import Avatar from '../../assets/icons/noavatar.png';

type SingleProps = {
    // id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: {
        text: string;
        time: string;
    }[];
};

const Single = ({ img, title, info, chart, activities }: SingleProps) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {img && <img src={img || Avatar} alt="" />}
                        <h1>{title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                    <div className="item"></div>
                </div>
                <hr />
                {chart && (
                    <div className="chart">
                        <ResponsiveContainer width="99%" height="100%">
                            <LineChart
                                data={chart?.data || data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />

                                {chart.dataKeys.map((dataKey) => (
                                    <Line
                                        key={dataKey.name}
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                        activeDot={{ r: 8 }}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {activities && (
                    <ul>
                        {activities.map(
                            (activity: { text: string; time: string }) => (
                                <li key={`${activity.text}-${activity.time}`}>
                                    <div>
                                        <p>{activity.text}</p>
                                        <time>{activity.time}</time>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Single;
