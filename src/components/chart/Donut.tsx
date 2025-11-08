import { Component } from 'react';
import Chart from 'react-apexcharts';
import { topLanguagesProps } from '../../../libs/types/stat';

interface props {
  topLanguages: topLanguagesProps[];
}

export default class Donut extends Component<props, any> {
  constructor(props: props) {
    super(props);
    this.state = {
      series: this.props.topLanguages.map((lang) => lang.bytes),
      options: {
        labels: this.props.topLanguages.map((lang) => lang.name),
        colors: this.props.topLanguages.map((lang) => lang.color),
        legend: {
          position: 'bottom',
        },
        dataLabels: {
          enabled: true,
          formatter: (value: number) => `${value.toFixed(1)}%`,
        },
        tooltip: {
          y: {
            formatter: (value: number) => `${value.toLocaleString()} bytes`,
          },
        },
      },
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='donut'
        width='350'
      />
    );
  }
}
