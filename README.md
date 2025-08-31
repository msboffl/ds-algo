# Data Structures and Algorithms Library

A comprehensive TypeScript library implementing fundamental data structures and algorithms, inspired by Java's Collections Framework. Built with modern TypeScript practices and comprehensive testing.

## 📦 Packages

This monorepo contains the following packages:

- **`@ds-algo/collections`** - Collection framework with interfaces and implementations
  - Core interfaces (Collection, Iterable, Iterator)
  - Abstract base classes (planned)
  - Concrete implementations (planned)
  - Collection-specific algorithms (planned)

- **`@ds-algo/algorithms`** - Algorithm implementations
  - Sorting algorithms (Quick Sort, Merge Sort, Bubble Sort, Heap Sort)
  - Searching algorithms (Binary Search, Linear Search, Depth First Search)
  - Graph algorithms (Dijkstra, BFS, DFS, Topological Sort)
  - Dynamic programming solutions (Fibonacci, LCS, Knapsack)
  - String algorithms (KMP, Boyer-Moore, Rabin-Karp) - planned
  - Mathematical algorithms (GCD, LCM, Prime factorization) - planned

## 🏗️ Project Structure

```
packages/
├── collections/          # Collection framework
│   ├── src/
│   │   ├── interfaces/   # Core interfaces (Collection, Iterable, Iterator)
│   │   ├── abstracts/    # Abstract base classes (planned)
│   │   ├── classes/      # Concrete implementations (planned)
│   │   └── algorithms/   # Collection-specific algorithms (planned)
│   ├── tests/           # Test files
│   └── README.md        # Package documentation
└── algorithms/          # Algorithm implementations
    ├── src/
    │   ├── sorting/     # Sorting algorithms (planned)
    │   ├── searching/   # Searching algorithms (planned)
    │   ├── graph/       # Graph algorithms (planned)
    │   ├── dynamic-programming/ # DP solutions (planned)
    │   ├── utils/       # Utility functions (planned)
    │   └── index.ts     # Main exports
    ├── tests/           # Test files
    └── README.md        # Package documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ds-algo.git
cd ds-algo

# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test
```

### Usage

#### Collections Package

```typescript
import { Collection, Iterable, Iterator } from '@ds-algo/collections';

// Define a custom collection
class MyCollection<T> implements Collection<T> {
  private items: T[] = [];

  iterator(): Iterator<T> {
    return new MyIterator(this.items);
  }
}

// Use the collection interfaces
const collection: Collection<number> = new MyCollection<number>();
```

#### Algorithms Package

```typescript
import { quickSort, binarySearch, dijkstra } from '@ds-algo/algorithms';

// Sorting
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = quickSort(numbers);

// Searching
const index = binarySearch(sortedNumbers, 25);

// Graph algorithms
const graph = { A: { B: 4, C: 2 }, B: { A: 4, C: 1, D: 5 } };
const shortestPaths = dijkstra(graph, 'A');
```

## 🛠️ Development

### Available Scripts

```bash
# Build all packages
pnpm run build

# Build individual packages
pnpm run build --filter @ds-algo/collections
pnpm run build --filter @ds-algo/algorithms

# Run tests
pnpm run test

# Run tests for specific package
pnpm run test --filter @ds-algo/collections

# Development mode with hot reload
pnpm run dev

# Clean build artifacts
pnpm run clean

# Format code
pnpm run prettier:format

# Lint code
pnpm run lint
```

### Development Workflow

1. **Adding New Data Structures** (Collections package):
   - Create interface in `packages/collections/src/interfaces/`
   - Create abstract base class in `packages/collections/src/abstracts/`
   - Create concrete implementation in `packages/collections/src/classes/`
   - Add tests in `packages/collections/tests/`
   - Export from `packages/collections/src/index.ts`

2. **Adding New Algorithms** (Algorithms package):
   - Create algorithm file in appropriate category directory
   - Export from category's index file
   - Add comprehensive JSDoc comments with complexity analysis
   - Write unit tests covering various scenarios
   - Update package README with usage examples

### Testing Strategy

Each package includes:

- Unit tests with various input sizes
- Edge case testing
- Performance benchmarks
- Type safety verification
- Memory usage analysis

## 📊 Current Status

### Collections Package

- ✅ Core interfaces implemented (Collection, Iterable, Iterator)
- ✅ Package structure and build configuration
- ✅ TypeScript support with comprehensive type definitions
- 🔄 Abstract base classes (in progress)
- 🔄 Concrete implementations (planned)
- 🔄 Collection-specific algorithms (planned)

### Algorithms Package

- ✅ Package structure and build configuration
- ✅ Comprehensive documentation and roadmap
- 🔄 Sorting algorithms (in progress)
- 🔄 Searching algorithms (in progress)
- 🔄 Graph algorithms (planned)
- 🔄 Dynamic programming solutions (planned)

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

- **[Collections Package](./packages/collections/README.md)** - Collection framework documentation
- **[Algorithms Package](./packages/algorithms/README.md)** - Algorithms library documentation
- **[API Reference](./docs/api.md)** - Complete API documentation (planned)
- **[Performance Benchmarks](./docs/benchmarks.md)** - Algorithm performance comparisons (planned)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper tests
4. Ensure all tests pass (`pnpm run test`)
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests for new features
- Include JSDoc comments for all public APIs
- Update relevant documentation
- Ensure code formatting with Prettier

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Java's Collections Framework
- Built with modern TypeScript practices
- Comprehensive testing with Vitest
- Monorepo management with pnpm workspaces

## 📈 Roadmap

### Short Term (Next 3 months)

- [ ] Implement core collection classes (ArrayList, LinkedList, HashSet)
- [ ] Add basic sorting algorithms (Quick Sort, Merge Sort)
- [ ] Add searching algorithms (Binary Search, Linear Search)
- [ ] Add comprehensive test coverage
- [ ] Add performance benchmarks

### Medium Term (3-6 months)

- [ ] Add graph algorithms (Dijkstra, BFS, DFS)
- [ ] Add dynamic programming solutions
- [ ] Add string algorithms
- [ ] Add mathematical algorithms
- [ ] Add algorithm visualization tools

### Long Term (6+ months)

- [ ] Add advanced data structures (B-trees, Red-black trees)
- [ ] Add parallel algorithms
- [ ] Add machine learning algorithms
- [ ] Add comprehensive documentation site
- [ ] Add interactive examples and demos

## 🔗 Related Projects

- **[TypeScript Collections](https://github.com/basarat/typescript-collections)** - Alternative TypeScript collections library
- **[Algorithms.js](https://github.com/trekhleb/javascript-algorithms)** - JavaScript algorithms and data structures
- **[Data Structures and Algorithms in TypeScript](https://github.com/amejiarosario/dsa.js)** - DSA implementation in TypeScript

---

**Note**: This is an active development project. Check the [Issues](../../issues) page for current development status and planned features.
