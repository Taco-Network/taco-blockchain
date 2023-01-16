export const service_wallet = 'taco_wallet';
export const service_full_node = 'taco_full_node';
export const service_farmer = 'taco_farmer';
export const service_harvester = 'taco_harvester';
export const service_simulator = 'taco_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'taco_plotter';
export const service_data_layer = 'taco_data_layer';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Data Layer',
};
