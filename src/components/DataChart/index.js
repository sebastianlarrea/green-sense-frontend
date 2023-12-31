import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import './index.scss';

const DataChart = ({ data }) => {
    console.log(data)
    const maxValue = Math.max(...data.map(entry => entry.data));
    const buffer = 0.1;
    const yAxisDomain = [0, Math.ceil(maxValue * (1 + buffer))];
    console.log(yAxisDomain);
    return  <section className='data-chart'>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Line type="monotone" dataKey="data" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: 5, dy: 5 }} height={50}/>
                <YAxis 
                    label={{ angle: -90, position: 'insideLeft' }} 
                    domain={yAxisDomain}
                />
            </LineChart>
        </ResponsiveContainer>
    </section>
};

export default DataChart;