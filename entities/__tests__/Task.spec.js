import Task from '../task';


describe('Incoming Commands on Task', () => {

  it('can toggle complete', () => {
    const task = new Task();
    expect(task.completed).toBe(false);
    task.toggleComplete();
    expect(task.completed).toBe(true);
  })

  it('accepts name of task', () => {
    const task = new Task(1, "foo");
    expect(task.name).toBe("foo");
  })
})