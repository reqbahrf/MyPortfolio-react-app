import type { ContributionsProps } from '../../../libs/types/stat';
import { Component } from 'react';
import Chart from 'react-apexcharts';
import type { HeatmapWorkerOut } from '../../../libs/types/HeatmapWorker.types';
import HeatMapSkeleton from '../../components/skeleton/chart/HeatMap';
export default class HeatMap extends Component<ContributionsProps, any> {
  private worker: Worker | null;
  private isLoading: boolean;
  constructor(props: ContributionsProps) {
    super(props);
    this.worker = null;
    this.isLoading = true;
    this.state = {
      series: [],
      options: {
        chart: {
          type: 'heatmap',
          toolbar: {
            show: false,
          },
          background: 'transparent',
        },
        theme: {
          mode: this.props.theme,
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
          categories: [],
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

  componentDidMount(): void {
    this.worker = new Worker(
      new URL('../../workers/heatmap.worker', import.meta.url),
      { type: 'module' },
    );
    this.isLoading = true;
    this.worker.onmessage = (e: MessageEvent<HeatmapWorkerOut>) => {
      this.setState({
        series: e.data.series,
        options: {
          ...this.state.options,
          theme: {
            mode: this.props.theme,
          },
          xaxis: {
            ...this.state.options.xaxis,
            categories: e.data.dayCategories,
          },
        },
      });
      this.isLoading = false;
    };
    this.worker.postMessage(this.props.contributions);
  }

  componentDidUpdate(prevProps: ContributionsProps) {
    if (
      prevProps.contributions !== this.props.contributions ||
      prevProps.theme !== this.props.theme
    ) {
      if (!this.worker) return;
      this.isLoading = true;
      this.worker.postMessage(this.props.contributions);
    }
  }

  componentWillUnmount() {
    if (this.worker) {
      this.worker.terminate();
    }
  }

  render() {
    return (
      <div className='w-[95dvw] sm:w-[85dvw] md:w-[70dvw] lg:w-[60dvw]'>
        {this.isLoading ? (
          <HeatMapSkeleton />
        ) : (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='heatmap'
            width='100%'
            minHeight={500}
          />
        )}
      </div>
    );
  }
}
