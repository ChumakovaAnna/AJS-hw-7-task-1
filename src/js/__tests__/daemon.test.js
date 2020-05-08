import Daemon from "../types/daemon";

describe("Character", () => {
  test("new daemon", () => {
    const result = new Daemon("Oleg");
    const expected = {
      name: "Oleg",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(result).toEqual(expected);
  });
});
