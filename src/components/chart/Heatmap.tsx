import type { ContributionsProps } from '../../../libs/types/stat';
import { Component } from 'react';
import Chart from 'react-apexcharts';

export default class HeatMap extends Component<ContributionsProps, any> {
  private groupWeeks: Record<string, number[]>;
  private heatMapSeries: any[];
  constructor(props: ContributionsProps) {
    super(props);
    this.groupWeeks = this.props.contributions.reduce<Record<string, number[]>>(
      (acc, day) => {
        const week = day.date.slice(0, 7);
        if (!acc[week]) acc[week] = [];
        acc[week].push(day.contributionCount);
        return acc;
      },
      {}
    );
    this.heatMapSeries = Object.entries(this.groupWeeks).map(
      ([month, counts]) => ({
        name: month,
        data: counts.map((count, i) => ({
          x: `Day ${i + 1}`,
          y: count,
        })),
      })
    );
    this.state = {
      series: this.heatMapSeries,
      options: {
        chart: {
          type: 'heatmap',
        },
        xaxis: {
          labels: { show: false },
        },
        yaxis: {
          labels: { show: false },
        },
        colors: ['#008FFB'],
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Github Contributions (Heatmap)',
          align: 'center',
        },
      },
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        width='350'
      />
    );
  }
}
