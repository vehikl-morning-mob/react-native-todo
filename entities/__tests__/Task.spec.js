import TaskEntity from '../../entities/task';


describe('Incoming Commands on Task', () => {
  it('can be marked as complete', () => {
    const task = new TaskEntity();
    expect(task.completed).toBe(false);
    task.markComplete();
    expect(task.completed).toBe(true);
  })

  it('accepts name of task', () => {
    const task = new TaskEntity(1, "foo");
    expect(task.name).toBe("foo");
  })
})