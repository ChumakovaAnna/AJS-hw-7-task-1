import Bowman from "../types/bowman";

describe("Character", () => {
  test("new bowman", () => {
    const result = new Bowman("Oleg");
    const expected = {
      name: "Oleg",
      type: "Bowman",
      health: 100,
      level: 1,
      defence: 25,
      attack: 25,
    };
    expect(result).toEqual(expected);
  });
});
