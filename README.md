# Data Structures and Algorithms Library

A TypeScript monorepo for data structures and algorithms, inspired by Java's Collections Framework. Managed with pnpm workspaces, typed with TypeScript, and tested with Vitest.

## 📦 Packages

This monorepo contains the following packages:

- **`@ds-algo/collections`** — Collection framework
  - Core interfaces: `Collection`, `Iterable`, `Iterator`, `List` (done)
  - Abstract base classes: `AbstractCollection`, `AbstractList` (done)
  - Concrete implementations: `ArrayList` (done), more planned
  - Utilities: `Collections` aggregator (done)

- **`@ds-algo/algorithms`** — Algorithms library
  - Package scaffold, build config, and tests setup present
  - Algorithm modules planned; exports not finalized yet

## 🏗️ Project Structure

```
packages/
├── collections/          # Collection framework
│   ├── src/
│   │   ├── interfaces/   # Core interfaces (Collection, Iterable, Iterator, List)
│   │   ├── abstracts/    # Abstract base classes (AbstractCollection, AbstractList)
│   │   ├── classes/      # Concrete implementations (ArrayList, Collections)
│   │   └── index.ts      # Main exports
│   ├── tests/            # Unit tests (e.g., ArrayList.test.ts)
│   └── README.md         # Package documentation
└── algorithms/           # Algorithm implementations (scaffolded)
    ├── src/
    │   └── index.ts      # Main exports (TBD)
    ├── tests/            # Test files
    └── README.md         # Package documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/msboffl/ds-algo.git
cd ds-algo

# Install workspace dependencies
pnpm install

# (Optional) Generate a fresh project tree snapshot
pnpm run generate:tree
```

### Build

```bash
# Build all workspaces (recursive)
pnpm -r run build

# Build a specific package
pnpm --filter @ds-algo/collections run build
pnpm --filter @ds-algo/algorithms run build
```

### Test

```bash
# Run all package tests (recursive)
pnpm -r run test

# Run tests in a specific package
pnpm --filter @ds-algo/collections run test
pnpm --filter @ds-algo/algorithms run test
```

### Usage

#### Collections Package

```typescript
import { ArrayList, List } from '@ds-algo/collections';

const list: List<number> = new ArrayList<number>();
list.add(1);
list.add(2);
```

#### Algorithms Package

Exports are being stabilized. Examples will be added as implementations land.

## 🛠️ Development

### Useful Commands

```bash
# Format repository
pnpm run prettier:format

# Check formatting
pnpm run prettier:check

# Package dev mode (example)
pnpm --filter @ds-algo/collections run dev

# Clean build artifacts (package level)
pnpm --filter @ds-algo/collections run clean
```

### Development Workflow

1. **Collections**
   - Add/extend interfaces in `packages/collections/src/interfaces/`
   - Implement shared logic in `packages/collections/src/abstracts/`
   - Implement concrete classes in `packages/collections/src/classes/`
   - Add tests under `packages/collections/src/tests/`
   - Export from `packages/collections/src/index.ts`

2. **Algorithms**
   - Implement algorithms under category folders (to be introduced)
   - Export from `packages/algorithms/src/index.ts`
   - Add tests under `packages/algorithms/tests/`
   - Document usage in `packages/algorithms/README.md`

### Testing Strategy

Each package includes or plans to include:

- Unit tests with various input sizes
- Edge case testing
- Performance checks where appropriate
- Type safety verification

## 📊 Current Status

### Collections Package

- ✅ Core interfaces implemented (Collection, Iterable, Iterator, List)
- ✅ Abstract base classes implemented (AbstractCollection, AbstractList)
- ✅ `ArrayList` implemented; `Collections` utilities available
- 🔄 Additional concrete structures (LinkedList, Set, Map) planned
- 🔄 Collection-specific algorithms planned

### Algorithms Package

- ✅ Package structure and build configuration
- 🔄 Algorithm implementations under development
- 🔄 Exports and API surface to be finalized

## 🎯 Features

### Collections Framework

- **Type-safe interfaces** with full TypeScript support
- **Generic collections** for any data type
- **Iterator pattern** for consistent iteration
- **Extensible design** for custom implementations
- **Java-inspired** architecture for familiarity

### Algorithms Library

- **Well-tested implementations** with comprehensive test coverage
- **Performance optimized** with complexity analysis
- **Multiple algorithm categories** (sorting, searching, graph, etc.)
- **TypeScript-first** with proper type definitions
- **Educational focus** with clear documentation

## 📚 Documentation

- **[Collections Package](./packages/collections/README.md)** — Collection framework
- **[Algorithms Package](./packages/algorithms/README.md)** — Algorithms library
- API reference and benchmarks are planned under `docs/`.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) if available.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with appropriate tests
4. Ensure all tests pass (`pnpm -r run test`)
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests for new features
- Include JSDoc comments for public APIs
- Update relevant documentation
- Ensure code formatting with Prettier

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Java's Collections Framework
- Built with modern TypeScript practices
- Testing with Vitest
- Monorepo management with pnpm workspaces

## 📈 Roadmap

### Short Term

- [ ] Add LinkedList, Stack, Queue to collections
- [ ] Establish algorithms module layout and initial exports
- [ ] Basic sorting/searching algorithms
- [ ] Expand unit tests

### Medium Term

- [ ] Graph and dynamic programming algorithms
- [ ] String and mathematical algorithms
- [ ] Performance benchmarks

### Long Term

- [ ] Advanced data structures (trees, heaps, tries)
- [ ] Parallel/optimized variants
- [ ] Documentation site and interactive examples

## 🔗 Related Projects

- **TypeScript Collections** — `https://github.com/basarat/typescript-collections`
- **javascript-algorithms** — `https://github.com/trekhleb/javascript-algorithms`
- **dsa.js** — `https://github.com/amejiarosario/dsa.js`

---

**Note**: This is an active development project. Check the [Issues](../../issues) page for current development status and planned features.
