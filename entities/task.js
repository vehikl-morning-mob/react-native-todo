export default class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}