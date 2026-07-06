---
trigger: always_on
description: Use this rule when implementing command-driven architecture in the application.
---

# Command Architecture Rule

## Overview

This project uses a **command-based pattern** to centralize all application actions behind a single `actions` object with nested domains and strong observability. The system is framework-agnostic and can be invoked from anywhere (React components, JS modules, stores, etc.).

## Rule Scope

This is the official and only allowed pattern for command-driven communication in the project.

### Key Components

1. **Command System** (`/src/lib/command/`)
2. **Action Types** (`/src/lib/command/types.ts`)
3. **Global Actions** (`/src/lib/command/global.ts`)
4. **Command Bus** (`/src/lib/command/command-bus.ts`)
5. **Transitions Store** (`/src/lib/command/transitions-store.ts`)
6. **Instance Registry** (`/src/lib/command/instance-registry.ts`)

---

## 1. Defining Global Actions

Define global action types in `src/lib/command/global.ts`:

```typescript
// /src/lib/command/global.ts
import type { Action, ScopedAction } from "./types";

export interface Actions {
  counter: {
    increment: Action;
    decrement: Action;
    reset: Action;
  };

  content: {
    show: ScopedAction<string>;
  };
}
```

- **Action**: Global command, no instance required
- **ScopedAction**: Instance-scoped command, requires `instanceId` at registration and dispatch

---

## 2. Defining Feature-Specific Actions (Optional)

For better organization, you can define action types within feature folders using module augmentation:

```typescript
// /src/features/pipeline/types.ts
import type { ScopedAction } from "@/lib/command/types";

declare module "#/lib/command/global" {
  interface Actions {
    pipeline: {
      save: ScopedAction<PipelineData>;
      update: {
        name: ScopedAction<string>;
      };
    };
  }
}
```

This allows you to keep action types close to the feature implementation while maintaining type safety.

---

## 3. Instantiation

The command system is already instantiated in `src/lib/command/index.ts`:

```typescript
import { command, actions } from '@/lib/command';
```

---

## 4. Registering Handlers

### Unscoped Command

```typescript
const disposeIncrement = command.handle("counter.increment", async () => {
  // business logic
  return; // optional return value
});
```

### Scoped Command

```typescript
const disposeAdd = command.handle(
  "pipeline.nodes.add",
  async (node: Node) => {
    // `node` is strongly typed as Node
    return { success: true };
  },
  {
    instanceId: "pipeline-1",
    meta: { label: "Main pipeline" },
  },
);
```

### Cleanup

Always dispose handlers when unmounting:

```typescript
useEffect(() => {
  const dispose1 = command.handle("counter.increment", increment);
  const dispose2 = command.handle("counter.decrement", decrement);

  return () => {
    dispose1();
    dispose2();
  };
}, [increment, decrement]);
```

---

## 5. Dispatching Commands

### Unscoped Dispatch

```typescript
await actions.counter.increment();
await actions.counter.decrement();
await actions.counter.reset();
```

### Scoped Dispatch

```typescript
await actions.pipeline.nodes.add(
  { id: "n1", label: "Filter" },
  { instanceId: "pipeline-1" },
);
```

### Direct Dispatch

```typescript
await command.dispatch("counter.increment");
await command.dispatch("pipeline.nodes.add", payload, {
  instanceId: "pipeline-1",
});
```

---

## 6. Transitions

Track execution state for loading indicators:

### Using the React Hook (Recommended)

```typescript
import { useTransition } from '@/hooks/use-transition';

function CounterButton() {
  const isExecuting = useTransition(["counter.increment"]);

  return (
    <button onClick={() => actions.counter.increment()} disabled={isExecuting}>
      Increment
    </button>
  );
}
```

### Using the Store Directly

```typescript
import { TransitionStore } from '@/lib/command/transitions-store';

const transitions = TransitionStore.getInstance();

// Check if command is executing
const isExecuting = transitions.isExecuting("counter.increment");

// Custom transition key
await actions.counter.increment(undefined, {
  transition: ["custom-key"],
});

const isCustomExecuting = transitions.isExecuting(["custom-key"]);
```

---

## 7. Instance Registry

Discover registered instances for UI integration:

```typescript
import { InstanceRegistry } from '@/lib/command/instance-registry';

const registry = InstanceRegistry.getInstance();

// Get all instances for a domain
const pipelineInstances = registry.getInstances("pipeline");
// Returns: [{ id: "pipeline-1", label: "Main pipeline" }]
```

---

## Complete Example

```typescript
// Component with scoped command
function PipelineEditor({ pipelineId }: { pipelineId: string }) {
  const [nodes, setNodes] = useState<Node[]>([]);

  const addNode = useCallback(async (node: Node) => {
    setNodes((prev) => [...prev, node]);
  }, []);

  useEffect(() => {
    const dispose = command.handle("pipeline.nodes.add", addNode, {
      instanceId: pipelineId,
      meta: { label: `Pipeline ${pipelineId}` },
    });

    return () => dispose();
  }, [pipelineId, addNode]);

  const handleAddNode = () => {
    actions.pipeline.nodes.add(
      { id: crypto.randomUUID(), label: "New Node" },
      { instanceId: pipelineId },
    );
  };

  return <button onClick={handleAddNode}>Add Node</button>;
}
```

---

## Checklist

* [ ] Define global action types in `src/lib/command/global.ts`
* [ ] Define feature-specific action types using module augmentation (if needed)
* [ ] Register handlers with proper cleanup
* [ ] Use `instanceId` for scoped commands
* [ ] Dispatch commands via `actions` proxy or `command.dispatch`
* [ ] Use `useTransition` hook for loading states in React components
* [ ] Use instance registry for discovery (if needed)

---

## Best Practices

1. **Always cleanup handlers** - call dispose function on unmount
2. **Strong typing** - define payloads and returns in action types
3. **Global actions** - define in `src/lib/command/global.ts` for shared actions
4. **Feature-specific actions** - use module augmentation in feature folders for better organization
5. **Scoped commands** - use for domain-specific instances (editors, modals, etc.)
6. **Unscoped commands** - use for global actions (navigation, auth, etc.)
7. **Transitions** - track execution state for loading indicators
8. **Instance registry** - leverage for UI pickers and instance discovery
9. **Consistent naming** - use dotted paths (e.g., `domain.subdomain.action`)
