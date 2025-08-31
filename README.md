# Data Structures and Algorithms Library

A comprehensive TypeScript library implementing fundamental data structures and algorithms, inspired by Java's Collections Framework.

## 📦 Packages

This monorepo contains the following packages:

- **`@ds-algo/collections`** - Collection framework with interfaces and implementations
- **`@ds-algo/algorithms`** - Algorithm implementations (coming soon)

## 🏗️ Project Structure

```
packages/
├── collections/          # Collection framework
│   ├── src/
│   │   ├── interfaces/   # Core interfaces (Collection, Iterable, Iterator)
│   │   ├── abstracts/    # Abstract base classes
│   │   ├── classes/      # Concrete implementations
│   │   └── algorithms/   # Collection-specific algorithms
│   └── tests/           # Test files
└── algorithms/          # General algorithms (planned)
    ├── src/
    │   ├── sorting/     # Sorting algorithms
    │   ├── searching/   # Searching algorithms
    │   └── graph/       # Graph algorithms
    └── tests/
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test
```

### Usage

```typescript
import { Collection, Iterable, Iterator } from '@ds-algo/collections';

// Use the collection interfaces
const collection: Collection<number> = // your implementation
```

## 🛠️ Development

### Scripts

- `pnpm run build` - Build all packages
- `pnpm run test` - Run tests
- `pnpm run dev` - Start development mode
- `pnpm run clean` - Clean build artifacts
- `pnpm run prettier:format` - Format code

### Adding New Data Structures

1. Create interface in `packages/collections/src/interfaces/`
2. Create abstract base class in `packages/collections/src/abstracts/`
3. Create concrete implementation in `packages/collections/src/classes/`
4. Add tests in `packages/collections/tests/`
5. Export from `packages/collections/src/index.ts`

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📚 Roadmap

- [ ] Implement core collection classes (ArrayList, LinkedList, etc.)
- [ ] Add sorting algorithms
- [ ] Add searching algorithms
- [ ] Add graph algorithms
- [ ] Add performance benchmarks
- [ ] Add comprehensive documentation
