# @ds-algo/algorithms

A comprehensive TypeScript library implementing fundamental algorithms for data structures, optimization, and problem-solving.

## 📦 Overview

This package provides a collection of well-tested, performant algorithms implemented in TypeScript. It includes sorting algorithms, searching algorithms, graph algorithms, and other computational techniques commonly used in software development and computer science.

## 🏗️ Architecture

The package is organized by algorithm categories for easy navigation and usage:

```
src/
├── sorting/           # Sorting algorithms
│   ├── bubble-sort.ts
│   ├── quick-sort.ts
│   ├── merge-sort.ts
│   └── heap-sort.ts
├── searching/         # Searching algorithms
│   ├── binary-search.ts
│   ├── linear-search.ts
│   └── depth-first-search.ts
├── graph/            # Graph algorithms
│   ├── dijkstra.ts
│   ├── breadth-first-search.ts
│   └── topological-sort.ts
├── dynamic-programming/ # Dynamic programming solutions
│   ├── fibonacci.ts
│   ├── longest-common-subsequence.ts
│   └── knapsack.ts
├── utils/            # Utility functions
│   ├── comparators.ts
│   └── helpers.ts
└── index.ts          # Main exports
```

## 🚀 Installation

```bash
# Install the package
pnpm add @ds-algo/algorithms

# Or install from the monorepo
pnpm install
```

## 📖 Usage

### Sorting Algorithms

```typescript
import { quickSort, mergeSort, bubbleSort } from '@ds-algo/algorithms';

// Quick Sort
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers); // [11, 12, 22, 25, 34, 64, 90]

// Merge Sort with custom comparator
const strings = ['banana', 'apple', 'cherry'];
const sortedStrings = mergeSort(strings, (a, b) => a.localeCompare(b));
console.log(sortedStrings); // ['apple', 'banana', 'cherry']
```

### Searching Algorithms

```typescript
import { binarySearch, linearSearch } from '@ds-algo/algorithms';

// Binary Search (requires sorted array)
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearch(sortedArray, target);
console.log(`Found ${target} at index: ${index}`); // Found 7 at index: 3

// Linear Search
const unsortedArray = [4, 2, 8, 1, 9, 3];
const searchResult = linearSearch(unsortedArray, 8);
console.log(`Found 8 at index: ${searchResult}`); // Found 8 at index: 2
```

### Graph Algorithms

```typescript
import { dijkstra, breadthFirstSearch } from '@ds-algo/algorithms';

// Dijkstra's Shortest Path
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 5, C: 8 },
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths); // { A: 0, B: 3, C: 2, D: 8 }

// Breadth First Search
const adjacencyList = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const bfsResult = breadthFirstSearch(adjacencyList, 'A');
console.log(bfsResult); // ['A', 'B', 'C', 'D', 'E', 'F']
```

### Dynamic Programming

```typescript
import { fibonacci, longestCommonSubsequence } from '@ds-algo/algorithms';

// Fibonacci with memoization
const fib10 = fibonacci(10);
console.log(`Fibonacci(10) = ${fib10}`); // Fibonacci(10) = 55

// Longest Common Subsequence
const lcs = longestCommonSubsequence('ABCDGH', 'AEDFHR');
console.log(`LCS length: ${lcs}`); // LCS length: 3
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

# Run tests with coverage
pnpm run test --coverage
```

### Development Mode

```bash
# Start development mode with hot reload
pnpm run dev
```

## 📋 API Reference

### Sorting Algorithms

#### `quickSort<T>(array: T[], comparator?: Comparator<T>): T[]`

Implements the Quick Sort algorithm with O(n log n) average time complexity.

#### `mergeSort<T>(array: T[], comparator?: Comparator<T>): T[]`

Implements the Merge Sort algorithm with O(n log n) time complexity.

#### `bubbleSort<T>(array: T[], comparator?: Comparator<T>): T[]`

Implements the Bubble Sort algorithm with O(n²) time complexity.

### Searching Algorithms

#### `binarySearch<T>(array: T[], target: T, comparator?: Comparator<T>): number`

Implements Binary Search with O(log n) time complexity. Returns the index of the target or -1 if not found.

#### `linearSearch<T>(array: T[], target: T, comparator?: Comparator<T>): number`

Implements Linear Search with O(n) time complexity. Returns the index of the target or -1 if not found.

### Graph Algorithms

#### `dijkstra(graph: Graph, start: string): Record<string, number>`

Implements Dijkstra's shortest path algorithm.

#### `breadthFirstSearch(graph: Graph, start: string): string[]`

Implements Breadth First Search traversal.

### Dynamic Programming

#### `fibonacci(n: number): number`

Calculates the nth Fibonacci number using memoization.

#### `longestCommonSubsequence(str1: string, str2: string): number`

Finds the length of the longest common subsequence between two strings.

## 🔮 Roadmap

- [x] Package structure setup
- [ ] Sorting algorithms (Quick Sort, Merge Sort, Bubble Sort, Heap Sort)
- [ ] Searching algorithms (Binary Search, Linear Search, Depth First Search)
- [ ] Graph algorithms (Dijkstra, BFS, DFS, Topological Sort)
- [ ] Dynamic programming solutions (Fibonacci, LCS, Knapsack)
- [ ] String algorithms (KMP, Boyer-Moore, Rabin-Karp)
- [ ] Mathematical algorithms (GCD, LCM, Prime factorization)
- [ ] Performance benchmarks and comparisons
- [ ] Comprehensive test coverage
- [ ] Algorithm visualization tools
- [ ] Documentation with complexity analysis

## 🧪 Testing Strategy

Each algorithm includes:

- Unit tests with various input sizes
- Edge case testing (empty arrays, single elements, duplicates)
- Performance benchmarks
- Type safety verification
- Memory usage analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-algorithm`)
3. Implement the algorithm with proper TypeScript types
4. Add comprehensive tests
5. Update documentation
6. Submit a pull request

### Adding New Algorithms

1. Create the algorithm file in the appropriate category directory
2. Export the function from the category's index file
3. Add comprehensive JSDoc comments with complexity analysis
4. Write unit tests covering various scenarios
5. Update the main README with usage examples

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🔗 Related Packages

- **`@ds-algo/collections`** - Collection framework and data structures
- **`@ds-algo/core`** - Core utilities and helpers (planned)

## 📚 References

- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
- "Algorithm Design Manual" by Steven Skiena
- Various academic papers and research publications

---

**Note**: This package is part of the larger Data Structures and Algorithms library. For more information, see the main [README](../../README.md).
