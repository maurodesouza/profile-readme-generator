import { Subject } from './subject';
import type { Instance } from './types';

export class InstanceRegistry extends Subject {
  private static instance: InstanceRegistry;
  private domains: Map<string, Map<string, Instance>> = new Map();
  private instancesCache: Map<string, readonly Instance[]> = new Map();

  private constructor() {
    super();
  }

  add(domain: string, instance: Instance) {
    if (!this.domains.has(domain)) {
      this.domains.set(domain, new Map());
    }

    this.domains.get(domain)?.set(instance.id, instance);
    this.instancesCache.delete(domain);
    this.notify();
  }

  getInstances(domain: string): readonly Instance[] {
    const cached = this.instancesCache.get(domain);
    if (cached) return cached;

    const fresh = Array.from(this.domains.get(domain)?.values() ?? []);
    this.instancesCache.set(domain, fresh);
    return fresh;
  }

  remove(domain: string, instanceId: string) {
    if (!this.domains.has(domain)) return;

    this.domains.get(domain)?.delete(instanceId);
    this.instancesCache.delete(domain);
    this.notify();
  }

  static getInstance() {
    if (!InstanceRegistry.instance) {
      InstanceRegistry.instance = new InstanceRegistry();
    }

    return InstanceRegistry.instance;
  }
}
