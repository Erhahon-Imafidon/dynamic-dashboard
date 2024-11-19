import './home.scss';
import { ChartBox, TopBox, BarChartBox } from '../../components/index.tsx';
import {
    chartBoxUser,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    barChartBoxRevenue,
    barChartBoxVisit,
} from '../../data.ts';

const Home = () => {
    return (
        <section className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">Box4</div>
            <div className="box box5">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box7">Box7</div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </section>
    );
};

export default Home;
