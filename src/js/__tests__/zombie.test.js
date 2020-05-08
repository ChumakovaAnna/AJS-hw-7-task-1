import Zombie from "../types/zombie";

describe("Character", () => {
  test("new zombie", () => {
    const result = new Zombie("Oleg");
    const expected = {
      name: "Oleg",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(result).toEqual(expected);
  });
});
