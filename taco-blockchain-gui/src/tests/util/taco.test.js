const taco = require('../../util/taco');

describe('taco', () => {
  it('converts number byte to taco', () => {
    const result = taco.byte_to_taco(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string byte to taco', () => {
    const result = taco.byte_to_taco('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number byte to taco string', () => {
    const result = taco.byte_to_taco_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string byte to taco string', () => {
    const result = taco.byte_to_taco_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number taco to byte', () => {
    const result = taco.taco_to_byte(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string taco to byte', () => {
    const result = taco.taco_to_byte('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number byte to colouredcoin', () => {
    const result = taco.byte_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string byte to colouredcoin', () => {
    const result = taco.byte_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number byte to colouredcoin string', () => {
    const result = taco.byte_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string byte to colouredcoin string', () => {
    const result = taco.byte_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to byte', () => {
    const result = taco.colouredcoin_to_byte(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to byte', () => {
    const result = taco.colouredcoin_to_byte('1000');

    expect(result).toBe(1000000);
  });
});
