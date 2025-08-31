# @ds-algo/collections

A TypeScript collection framework inspired by Java's Collections Framework, providing a robust foundation for data structure implementations.

## 📦 Overview

This package provides the core interfaces and abstractions for building a comprehensive collection framework in TypeScript. It serves as the foundation for implementing various data structures like lists, sets, maps, and more.

## 🏗️ Architecture

The package follows a hierarchical design pattern similar to Java's Collections Framework:

```
Collection<T> extends Iterable<T>
    ↓
Iterable<T> provides Iterator<T>
    ↓
Iterator<T> defines iteration protocol
```

### Core Interfaces

- **`Collection<T>`** - The root interface for all collections
- **`Iterable<T>`** - Defines the iteration capability
- **`Iterator<T>`** - Provides iteration methods (hasNext, next, remove)

## 📁 Package Structure

```
src/
├── interfaces/          # Core interfaces
│   ├── Collection.ts   # Collection interface
│   ├── Iterable.ts     # Iterable interface
│   └── Iterator.ts     # Iterator interface
├── abstracts/          # Abstract base classes (planned)
├── classes/           # Concrete implementations (planned)
├── algorithms/        # Collection algorithms (planned)
└── index.ts          # Main exports
```

## 🚀 Installation

```bash
# Install the package
pnpm add @ds-algo/collections

# Or install from the monorepo
pnpm install
```

## 📖 Usage

### Basic Interface Usage

```typescript
import { Collection, Iterable, Iterator } from '@ds-algo/collections';

// Define a custom collection
class MyCollection<T> implements Collection<T> {
  private items: T[] = [];

  iterator(): Iterator<T> {
    return new MyIterator(this.items);
  }
}

// Define a custom iterator
class MyIterator<T> implements Iterator<T> {
  private index = 0;
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): T {
    if (!this.hasNext()) {
      throw new Error('No more elements');
    }
    return this.items[this.index++];
  }

  remove(): void {
    // Implementation for removing the last returned element
    this.items.splice(this.index - 1, 1);
    this.index--;
  }
}
```

### TypeScript Support

The package includes full TypeScript support with comprehensive type definitions:

```typescript
// Generic collections with type safety
const numberCollection: Collection<number> = new MyCollection<number>();
const stringCollection: Collection<string> = new MyCollection<string>();

// Iterator with proper typing
const iterator: Iterator<number> = numberCollection.iterator();
```

## 🛠️ Development

### Building

```bash
# Build CommonJS and ESM versions
pnpm run build

# Build CommonJS only
pnpm run build:cjs

# Build ESM only
pnpm run build:esm
```

### Testing

```bash
# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test --watch
```

### Development Mode

```bash
# Start development mode with hot reload
pnpm run dev
```

## 📋 API Reference

### Collection<T>

The root interface for all collections.

```typescript
interface Collection<T> extends Iterable<T> {}
```

### Iterable<T>

Defines the iteration capability for collections.

```typescript
interface Iterable<T> {
  iterator(): Iterator<T>;
}
```

### Iterator<T>

Provides methods for iterating over collection elements.

```typescript
interface Iterator<T> {
  hasNext(): boolean; // Returns true if there are more elements
  next(): T; // Returns the next element
  remove(): void; // Removes the last returned element
}
```

## 🔮 Roadmap

- [ ] Abstract base classes for common collection operations
- [ ] Concrete implementations (ArrayList, LinkedList, HashSet, etc.)
- [ ] Collection algorithms (sorting, searching, filtering)
- [ ] Performance optimizations
- [ ] Additional utility methods
- [ ] Comprehensive test coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🔗 Related Packages

- **`@ds-algo/algorithms`** - Algorithm implementations (coming soon)
- **`@ds-algo/core`** - Core utilities and helpers (planned)

---

**Note**: This package is part of the larger Data Structures and Algorithms library. For more information, see the main [README](../../README.md).
