import React from 'react';
import Template from './Template.js';
import MortgageChart from './MortgageChart.js';
import { HouseIdContext }from '../App.js';
import NumberFormat from 'react-number-format';

class MortgageBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      downPayment: 0,
      downPaymentPercent: 0,
      loan: 'Fixed30Year',
      interest: 4.176,
      propertyTax: 0,
      propertyTaxPercent: 1.2,
      insurance: 1200,
      hoa: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.select = this.select.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //here could do whatever is necessary with submitted value, currently didn't implement
  }

  select (e) {
    this.setState({ loan: e.target.value }, () => console.log(this.state));
  }

  componentDidMount() {
    this.setState({
      price: this.zestimate,
      downPayment: Math.floor(this.zestimate * 0.0425),
      propertyTax: Math.floor(this.zestimate * (this.state.propertyTaxPercent / 100)),
    });
  }


  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    const insurance = Math.floor(this.state.insurance / 12);
    const taxes = Math.floor(this.state.propertyTax / 12);
    const getPni = (total, years, rate) => {
      let percent = (rate / 100) / 12;
      let months = years * 12;
      return (total * (percent * Math.pow(1 + percent, months))) /
        (Math.pow(1 + percent, months) - 1);
    };

    const pni = this.state.loan === 'Fixed15Year' ? Math.floor(getPni(this.state.price - this.state.downPayment, 15, this.state.interest))
              : Math.floor(getPni(this.state.price - this.state.downPayment, 30, this.state.interest));
    const total = insurance + taxes + this.state.hoa + pni; // ADD MORE STUFF HERE
    const data = [
      { name: 'P&I', value: pni, fill: '#0074E4'},
      { name: 'Insurance', value: insurance , fill: '#62AEF7'},
      { name: 'Taxes', value: taxes, fill: '#3290E9'},
      { name: 'PMI', value: 0, fill: '#1A5198'},
      { name: 'HOA', value: this.state.hoa, fill: '#D8FOF9' },
    ];
    return (
      <HouseIdContext.Consumer>
        {({ currentHouse }) => {
          const zestimate = Math.floor(currentHouse.zestimate[currentHouse.zestimate.length - 1]);
          const dPayment = Math.floor(zestimate * (this.state.interest / 100));
          this.zestimate = zestimate;
          return (
          <div id="mortgage-wrapper">
            <div id="mortgage-input-container">
              <form id="mortgage-input-form" onSubmit={this.handleSubmit}>
                <label>Home price</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input"
                  decimalScale={0}
                  defaultValue={zestimate} displayType={'input'} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({price: Number(value)});
                }}/>
                <br />
                <label>Down payment</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input mortgage-shorter"
                  value={this.state.downPayment}
                  decimalScale={0}
                  defaultValue={dPayment} displayType={'input'} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({downPayment: Number(value)});
                }}/>
                <NumberFormat
                  className="mortgage-percent"
                  // value={this.state.price / this.state.downPayment}
                  name='downPayment-percent'
                  defaultValue={4.25} displayType={'input'}  suffix={'%'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({downPayment: this.state.price * (value / 100)});
                }}/>

                <br />
                <label>Loan program</label>
                <br />
                <select id="mortgage-select" value={this.state.loan} onChange={this.select}>
                  <option value="Fixed30Year">30-year fixed</option>
                  <option value="Fixed15Year">15-year fixed</option>
                  <option value="ARM5">5/1 ARM</option>
                </select>
                <br />
                <label>Interest rate</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input"
                  name="price"
                  defaultValue={4.176} displayType={'input'} decimalScale={3} fixedDecimalScale={true} />
                <br />
                <label>Property tax</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input mortgage-shorter"
                  value={this.state.propertyTax}
                  decimalScale={0}
                  defaultValue={this.state.propertyTax} displayType={'input'} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({propertyTax: Number(value)});
                }}/>
                <NumberFormat
                  className="mortgage-percent"
                  // value={(this.state.price / this.state.propertyTax).toFixed(3)}
                  name='downPayment-percent'
                  defaultValue={1.2} displayType={'input'}  suffix={'%'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({propertyTax: this.state.price * (value / 100)});
                }}/>
                <br />
                <label>Home insurance</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input mortgage-shorter"
                  value={this.state.insurance}
                  decimalScale={0}
                  defaultValue={dPayment} displayType={'input'} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({insurance: Number(value)});
                }}/>
                <br />
                <label>HOA dues</label>
                <br />
                <NumberFormat
                  className="mortgage-num-input mortgage-shorter"
                  value={this.state.hoa}
                  decimalScale={0}
                  defaultValue={dPayment} displayType={'input'} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {value} = values;
                  this.setState({hoa: Number(value)});
                }}/>
                <br />
              </form>
            </div>
            <div id="mortgage-chart-container">
              <MortgageChart data={data} total={total}/>
            </div>
          </div>
          )}
        }
      </HouseIdContext.Consumer>
    );
  }
}

const Mortgage = Template(MortgageBase, 'Mortgage');

export default Mortgage;
