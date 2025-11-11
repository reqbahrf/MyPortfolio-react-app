import { Component } from 'react';
import Chart from 'react-apexcharts';
import { TopLanguagesProps } from '../../../libs/types/stat';

interface props {
  topLanguages: TopLanguagesProps[];
}

export default class Donut extends Component<props, any> {
  constructor(props: props) {
    super(props);
    this.state = {
      series: this.props.topLanguages.map((lang) => lang.percent),
      options: {
        chart: {
          background: 'transparent',
        },
        theme: {
          mode: 'dark',
        },
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
            formatter: (value: number) => `${value.toFixed(1)}%`,
          },
        },
        title: {
          text: 'Top Languages',
          align: 'center',
          style: {
            fontSize: '15px',
            color: '#ffffff',
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
        width='450'
      />
    );
  }
}
