import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Taco Proof of Space',
  options: optionsForPlotter(PlotterName.TACOPOS),
  defaults: defaultsForPlotter(PlotterName.TACOPOS),
  installInfo: { installed: true },
};
