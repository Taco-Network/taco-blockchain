const flax = require("../../util/flax");

describe("flax", () => {
  it("converts number mojo to flax", () => {
    const result = flax.mojo_to_flax(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to flax", () => {
    const result = flax.mojo_to_flax("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to flax string", () => {
    const result = flax.mojo_to_flax_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to flax string", () => {
    const result = flax.mojo_to_flax_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number flax to mojo", () => {
    const result = flax.flax_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string flax to mojo", () => {
    const result = flax.flax_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = flax.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = flax.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = flax.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = flax.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = flax.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = flax.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
