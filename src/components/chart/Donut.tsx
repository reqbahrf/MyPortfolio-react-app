import { Component } from 'react';
import Chart from 'react-apexcharts';
import { TopLanguagesProps } from '../../../libs/types/stat';
import { ChartThemeManager } from '../../utils/chartUtil';

interface props {
  topLanguages: TopLanguagesProps[];
}

export default class Donut extends Component<props, any> {
  private chartThemeManager: ChartThemeManager;

  constructor(props: props) {
    super(props);
    this.chartThemeManager = new ChartThemeManager(
      this.handleThemeChange.bind(this)
    );
    this.state = {
      series: this.props.topLanguages.map((lang) => lang.percent),
      options: {
        chart: {
          background: 'transparent',
        },
        theme: {
          mode: this.chartThemeManager.getTheme(),
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

  handleThemeChange(theme: 'light' | 'dark') {
    this.setState({
      options: {
        ...this.state.options,
        theme: {
          mode: theme,
        },
      },
    });
  }

  componentDidMount(): void {
    this.chartThemeManager.setupThemeObserver();
  }

  componentWillUnmount(): void {
    this.chartThemeManager.cleanup();
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
