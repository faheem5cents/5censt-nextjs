// chartjs.d.ts

import 'chart.js';

declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartTypeType = ChartTypeType> {
    counter2?: {
      fontColor?: string;
      fontSize?: string;
      fontWeight?: string;
      fontFamily?: string;
    };
  }
}
