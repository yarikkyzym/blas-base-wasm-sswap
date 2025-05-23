/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* WebAssembly routine to interchange two single-precision floating-point vectors.
*
* @module @stdlib/blas-base-wasm-sswap
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sswap = require( '@stdlib/blas-base-wasm-sswap' );
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* sswap.main( x.length, x, 1, y, 1 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sswap = require( '@stdlib/blas-base-wasm-sswap' );
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* sswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var ones = require( '@stdlib/array-ones' );
* var zeros = require( '@stdlib/array-zeros' );
* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
* var sswap = require( '@stdlib/blas-base-wasm-sswap' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new sswap.Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* mod.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing two vectors:
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
* mod.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* mod.main( N, xptr, 1, yptr, 1 );
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* mod.read( xptr, viewX );
* mod.read( yptr, viewY );
*
* console.log( viewX );
* // => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*
* console.log( viewY );
* // => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var Module = require( './module.js' );


// MAIN //

setReadOnly( main, 'Module', Module );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }
