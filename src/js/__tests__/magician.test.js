import Magician from "../types/magician";

describe("Character", () => {
  test("new magician", () => {
    const result = new Magician("Oleg");
    const expected = {
      name: "Oleg",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defense: 40,
    };
    expect(result).toEqual(expected);
  });
});
