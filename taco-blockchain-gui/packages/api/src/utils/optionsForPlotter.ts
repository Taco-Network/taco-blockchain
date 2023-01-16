import { PlotterOptions } from '../@types/Plotter';
import PlotterName from '../constants/PlotterName';
import { bladebitOptions, bladebit2Options, madmaxOptions, tacoposOptions } from '../constants/Plotters';

export default function optionsForPlotter(plotterName: PlotterName): PlotterOptions {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitOptions;
    case PlotterName.BLADEBIT2:
      return bladebit2Options;
    case PlotterName.MADMAX:
      return madmaxOptions;
    case PlotterName.TACOPOS: // fallthrough
    default:
      return tacoposOptions;
  }
}
