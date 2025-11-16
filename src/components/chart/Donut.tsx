import { Component } from 'react';
import Chart from 'react-apexcharts';
import { TopLanguagesProps } from '../../../libs/types/stat';
import DonutSkeleton from '../skeleton/chart/Donut';
interface props {
  topLanguages: TopLanguagesProps[];
  theme: 'light' | 'dark';
}

export default class Donut extends Component<props, any> {
  private isLoading: boolean;
  constructor(props: props) {
    super(props);
    this.isLoading = true;
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

  componentDidMount(): void {
    this.isLoading = true;
    this.setState({ ...this.state });
    this.isLoading = false;
  }

  componentDidUpdate(prevProps: props) {
    if (
      prevProps.topLanguages !== this.props.topLanguages ||
      prevProps.theme !== this.props.theme
    ) {
      this.isLoading = true;
      this.setState({
        series: this.state.series,
        options: {
          ...this.state.options,
          theme: {
            mode: this.props.theme,
          },
          labels: this.state.options.labels,
          colors: this.state.options.colors,
        },
      });
      this.isLoading = false;
    }
  }

  render() {
    return (
      <>
        {this.isLoading ? (
          <DonutSkeleton />
        ) : (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='donut'
            height='400'
            width='600'
          />
        )}
      </>
    );
  }
}
