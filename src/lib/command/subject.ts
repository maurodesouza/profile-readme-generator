export class Subject {
  private observers = new Set<() => void>();

  subscribe(observer: () => void) {
    this.observers.add(observer);

    return () => this.observers.delete(observer);
  }

  notify() {
    for (const observer of this.observers) observer();
  }
}
