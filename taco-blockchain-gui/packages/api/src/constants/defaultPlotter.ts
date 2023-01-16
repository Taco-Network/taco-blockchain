import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';
import PlotterName from './PlotterName';

export default {
  displayName: 'Taco Proof of Space',
  options: optionsForPlotter(PlotterName.TACOPOS),
  defaults: defaultsForPlotter(PlotterName.TACOPOS),
  installInfo: { installed: true },
};
