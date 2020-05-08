import Undead from "../types/undead";

describe("Character", () => {
  test("new undead", () => {
    const result = new Undead("Oleg");
    const expected = {
      name: "Oleg",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(result).toEqual(expected);
  });
});
