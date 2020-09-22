import IsraeliQueue from '../israeli-queue';

describe('israeliQueue', () => {
  it('should create empty queue', () => {
    const iq = new IsraeliQueue();
    expect(iq).not.toBeNull();
  });

  it('should enqueue data to queue', () => {
    const iq = new IsraeliQueue();

    iq.enqueue(1);
    iq.enqueue(2);

    expect(iq.toString()).toBe('1,2');
  });

  it('should be possible to enqueue/dequeue objects', () => {
    const iq = new IsraeliQueue();

    iq.enqueue({ value: 'test1', key: 'key1' });
    iq.enqueue({ value: 'test2', key: 'key2' });

    const stringifier = (value) => `${value.key}:${value.value}`;

    expect(iq.toString(stringifier)).toBe('key1:test1,key2:test2');
    expect(iq.dequeue().value).toBe('test1');
    expect(iq.dequeue().value).toBe('test2');
  });

  it('should peek data from queue', () => {
    const iq = new IsraeliQueue();

    expect(iq.peek()).toBeNull();

    iq.enqueue(1);
    iq.enqueue(2);

    expect(iq.peek()).toBe(1);
    expect(iq.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const iq = new IsraeliQueue();

    expect(iq.isEmpty()).toBe(true);

    iq.enqueue(1);

    expect(iq.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', () => {
    const iq = new IsraeliQueue();

    iq.enqueue(1);
    iq.enqueue(2);

    expect(iq.dequeue()).toBe(1);
    expect(iq.dequeue()).toBe(2);
    expect(iq.dequeue()).toBeNull();
    expect(iq.isEmpty()).toBe(true);
  });

  it('should be able to push in line', () => {
    const iq = new IsraeliQueue();
  });
});
