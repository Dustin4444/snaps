/**
 * This file is used to declare types for assets that are not natively
 * supported by TypeScript. This works because we are using Webpack to bundle
 * these assets.
 *
 * For example, WebAssembly modules are not natively supported by TypeScript,
 * so we need to declare a type for them here. This allows us to import them
 * in our code, and have TypeScript understand that they are valid modules.
 */
// eslint-disable-next-line import-x/unambiguous
declare module '*.wasm' {
  import type { instantiate } from '@metamask/wasm-example-snap/build/program';

  /**
   * The type of the WASM module. This is generated by AssemblyScript.
   */
  type Program = Awaited<ReturnType<typeof instantiate>>;

  const module: Program;
  export = module;
}
