// TypeScript Version: 3.5
import {Compiler, Processor, Plugin} from 'unified'
import {Node, Parent} from 'unist'
import {HastUtilToHtmlOptions} from 'hast-util-to-html'

declare class RehypeCompiler implements Compiler {
  compile(): string
  visitors: {
    [key: string]: remarkStringify.Visitor
  }
}

declare namespace remarkStringify {
  interface Stringify extends Plugin<[HastUtilToHtmlOptions?]> {
    Compiler: typeof RehypeCompiler
    (this: Processor, options?: HastUtilToHtmlOptions): void
  }

  type Compiler = RehypeCompiler

  type Visitor = (node: Node, parent?: Parent) => string
}

declare const rehypeStringify: remarkStringify.Stringify

export = rehypeStringify
