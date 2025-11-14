import { Component } from 'react';
import Chart from 'react-apexcharts';
import { TopLanguagesProps } from '../../../libs/types/stat';

interface props {
  topLanguages: TopLanguagesProps[];
  theme: 'light' | 'dark';
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
          mode: this.props.theme,
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
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps: props) {
    if (
      prevProps.topLanguages !== this.props.topLanguages ||
      prevProps.theme !== this.props.theme
    ) {
      console.log('Donut componentDidUpdate', this.props.theme);
      this.setState({
        series: this.props.topLanguages.map((lang) => lang.percent),
        options: {
          ...this.state.options,
          theme: {
            mode: this.props.theme,
          },
          labels: this.props.topLanguages.map((lang) => lang.name),
          colors: this.props.topLanguages.map((lang) => lang.color),
        },
      });
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='donut'
        height='400'
        width='600'
      />
    );
  }
}
