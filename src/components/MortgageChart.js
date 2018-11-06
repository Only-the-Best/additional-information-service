import React from 'react';
import {
  PieChart, Pie, Sector, Label, Legend,
} from 'recharts';

export default class MortgageChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
      <PieChart width={500} height={300}>
        <Pie
          datakey="value"
          data={this.props.data}
          cx={300}
          cy={200}
          innerRadius={60}
          outerRadius={75}
        />
        <text
          x={303}
          y={190}
          dy={8}
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="12">
            {'YOUR PAYMENT'}
          </tspan>
        </text>
        <text
          x={300}
          y={211}
          dy={8}
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="24">
            {`$${numberWithCommas(
              this.props.total,
            )}`}
          </tspan>
        </text>
      </PieChart>
    );
  }
}
