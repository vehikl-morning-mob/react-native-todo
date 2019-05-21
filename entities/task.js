export default class {
  constructor(id, name, completed = false) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  markComplete() {
    this.completed = true;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}