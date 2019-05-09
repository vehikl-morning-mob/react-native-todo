export default class {
  constructor(name) {
    this.completed = false;
    this.name = name;
  }

  markComplete() {
    this.completed = true;
  }
}