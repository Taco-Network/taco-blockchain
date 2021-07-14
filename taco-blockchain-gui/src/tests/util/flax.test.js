const taco = require("../../util/taco");

describe("taco", () => {
  it("converts number mojo to taco", () => {
    const result = taco.mojo_to_taco(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to taco", () => {
    const result = taco.mojo_to_taco("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to taco string", () => {
    const result = taco.mojo_to_taco_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to taco string", () => {
    const result = taco.mojo_to_taco_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number taco to mojo", () => {
    const result = taco.taco_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string taco to mojo", () => {
    const result = taco.taco_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = taco.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = taco.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = taco.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = taco.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = taco.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = taco.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
