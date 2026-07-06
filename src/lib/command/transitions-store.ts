import { Subject } from './subject';
import type { TransitionKey } from './types';

export class TransitionStore extends Subject {
  private static instance: TransitionStore;

  private counts: Map<string, number> = new Map();

  private constructor() {
    super();
  }

  start(key: TransitionKey) {
    const serializedKey = TransitionStore.serializeKey(key);
    const count = this.counts.get(serializedKey) ?? 0;

    this.counts.set(serializedKey, count + 1);
    this.notify();
  }

  done(key: TransitionKey) {
    const serializedKey = TransitionStore.serializeKey(key);
    const count = (this.counts.get(serializedKey) ?? 0) - 1;

    if (count <= 0) this.counts.delete(serializedKey);
    else this.counts.set(serializedKey, count);

    this.notify();
  }

  isExecuting(key: TransitionKey) {
    const serializedKey = TransitionStore.serializeKey(key);
    return (this.counts.get(serializedKey) ?? 0) > 0;
  }

  static serializeKey(key: TransitionKey) {
    return JSON.stringify(key);
  }

  static getInstance() {
    if (!TransitionStore.instance) {
      TransitionStore.instance = new TransitionStore();
    }

    return TransitionStore.instance;
  }
}
