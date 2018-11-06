import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const formatter = num => `${num / 1000}K`;

export default class HomeChart extends React.PureComponent {
  render() {
    return (
      <LineChart
        width={640}
        height={450}
        data={this.props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" minTickGap={18} />
        <YAxis
          domain={['auto', 'dataMax + 100000']}
          tickFormatter={formatter}
        />

        <Legend
          layout="vertical"
          align="left"
          verticalAlign="top"
          iconType="line"
        />

        <Tooltip />
        <Line
          type="linear"
          strokeWidth={2}
          dataKey="This House"
          stroke="#8884d8"
          dot={false}
        />
        <Line
          type="linear"
          strokeWidth={2}
          dataKey="Wakanda"
          typestroke="#82ca9d"
          strokeDasharray="4 4"
          dot={false}
        />
        <Line
          type="linear"
          strokeWidth={2}
          dataKey="Narnia"
          stroke="#7cd6c1"
          strokeDasharray="8 8"
          dot={false}
        />
      </LineChart>
    );
  }
}
