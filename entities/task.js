export default class {
  constructor(name, id) {
    this.completed = false;
    this.name = name;
    this.id = id;
  }

  markComplete() {
    this.completed = true;
  }
}