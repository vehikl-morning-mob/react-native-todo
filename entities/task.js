export default class {
  constructor(name) {
    this.isComplete = false;
    this.name = name;
  }

  markComplete() {
    this.isComplete = true;
  }
}