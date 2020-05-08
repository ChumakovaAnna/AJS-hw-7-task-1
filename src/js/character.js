/*
* Основной класс для всех персонажей
*/
export default class Character {
  /**
   * @param  {} name - имя персонажа
   */
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
