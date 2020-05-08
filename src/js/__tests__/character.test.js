import Character from "../character";

describe("Character", () => {
  test("new character", () => {
    const result = new Character("Oleg");
    const expected = {
      name: "Oleg",
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });
});
