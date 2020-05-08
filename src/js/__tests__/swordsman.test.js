import Swordsman from "../types/swordsman";

describe("Character", () => {
  test("new swordsman", () => {
    const result = new Swordsman("Oleg");
    const expected = {
      name: "Oleg",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(result).toEqual(expected);
  });
});
