import type { ContributionsProps } from '../../../libs/types/stat';
import { Component } from 'react';
import Chart from 'react-apexcharts';
import { ChartThemeManager } from '../../utils/chartUtil';

export default class HeatMap extends Component<ContributionsProps, any> {
  private chartThemeManager: ChartThemeManager;

  constructor(props: ContributionsProps) {
    super(props);
    this.chartThemeManager = new ChartThemeManager(
      this.handleThemeChange.bind(this)
    );
    const { series, dayCategories } = HeatMap.getHeatMapSeries(props);
    this.state = {
      series: series,
      options: {
        chart: {
          type: 'heatmap',
          toolbar: {
            show: false,
          },
          background: 'transparent',
        },
        theme: {
          mode: this.chartThemeManager.getTheme(),
        },
        dataLabels: {
          enabled: false,
        },
        colors: [
          {
            ranges: [
              { from: 0, to: 0, color: '#ebedf0' },
              { from: 1, to: 9, color: '#9be9a8' },
              { from: 10, to: 19, color: '#40c463' },
              { from: 20, to: 29, color: '#30a14e' },
              { from: 30, to: 1000, color: '#216e39' },
            ],
          },
        ],
        xaxis: {
          type: 'category',
          categories: dayCategories,
          labels: {
            show: true,
            rotate: -90,
            style: {
              fontSize: '10px',
              color: '#ffffff',
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              color: '#ffffff',
            },
          },
        },
        grid: {
          padding: {
            right: 0,
            left: 10,
          },
        },
        plotOptions: {
          heatmap: {
            radius: 0,
            enableShades: false,
            colorScale: {
              ranges: [
                { from: 0, to: 0, color: '#ebedf0' },
                { from: 1, to: 9, color: '#9be9a8' },
                { from: 10, to: 19, color: '#40c463' },
                { from: 20, to: 29, color: '#30a14e' },
                { from: 30, to: 1000, color: '#216e39' },
              ],
            },
          },
        },
        title: {
          text: 'GitHub Contributions (Yearly View)',
          align: 'center',
          style: {
            fontSize: '15px',
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

  static getHeatMapSeries(props: ContributionsProps) {
    const MONTHS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const DAYS_IN_MONTH = 31;
    const dayCategories = Array.from({ length: DAYS_IN_MONTH }, (_, i) =>
      (i + 1).toString()
    );

    const contributionsByMonth = props.contributions.reduce<
      Record<number, Record<number, number>>
    >((acc, day) => {
      const date = new Date(day.date);
      const month = date.getMonth();
      const dayOfMonth = date.getDate();

      if (!acc[month]) {
        acc[month] = {};
      }
      acc[month][dayOfMonth] = day.contributionCount;
      return acc;
    }, {});

    const series = MONTHS.map((monthName, monthIndex) => {
      const monthData = contributionsByMonth[monthIndex] || {};
      const data = dayCategories.map((day) => ({
        x: day,
        y: monthData[parseInt(day)] || 0,
      }));

      return {
        name: monthName,
        data: data,
      };
    }).reverse();

    return { series, dayCategories };
  }

  componentDidUpdate(prevProps: ContributionsProps) {
    if (prevProps.contributions !== this.props.contributions) {
      const { series, dayCategories } = HeatMap.getHeatMapSeries(this.props);
      this.setState({
        series: series,
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: dayCategories,
          },
        },
      });
    }
  }

  render() {
    return (
      <div className='w-full flex items-center justify-center'>
        <div className='w-[95dvw] sm:w-[85dvw] md:w-[70dvw] lg:w-[60dvw]'>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='heatmap'
            width='100%'
          />
        </div>
      </div>
    );
  }
}
