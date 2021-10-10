const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Taco {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const taco_formatter = (value, unit) => new Taco(value, unit);

taco_formatter.convert = convert;
taco_formatter.setDisplay = units.setDisplay;
taco_formatter.setUnit = units.setUnit;
taco_formatter.getUnit = units.getUnit;
taco_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const byte_to_taco = (byte) => {
  return taco_formatter(Number.parseInt(byte), 'byte').to('taco').value();
};

export const taco_to_byte = (taco) => {
  return taco_formatter(Number.parseFloat(Number(taco)), 'taco')
    .to('byte')
    .value();
};

export const byte_to_taco_string = (byte) => {
  return taco_formatter(Number(byte), 'byte').to('taco').toString();
};

export const byte_to_colouredcoin = (byte) => {
  return taco_formatter(Number.parseInt(byte), 'byte')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_byte = (colouredcoin) => {
  return taco_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('byte')
    .value();
};

export const byte_to_colouredcoin_string = (byte) => {
  return taco_formatter(Number(byte), 'byte').to('colouredcoin').toString();
};
