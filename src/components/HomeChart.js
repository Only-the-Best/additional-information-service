import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


export default class HomeChart extends React.Component {
  render() {
    return (
      <LineChart width={600} height={300} data={this.props.data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend />
        <Tooltip />
        <Line type="linear" dataKey="pv" stroke="#8884d8" dot={false}/>
        <Line type="linear" dataKey="month" scale='time' typestroke="#82ca9d" dot={false}/>
      </LineChart>
    );
  }
}