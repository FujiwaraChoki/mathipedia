"use client";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexProps {
  children: string;
  block?: boolean;
}

export function Latex({ children, block = false }: LatexProps) {
  try {
    if (block) {
      return <BlockMath math={children} />;
    }
    return <InlineMath math={children} />;
  } catch (error) {
    console.error('LaTeX rendering error:', error);
    return <span className="text-destructive">{children}</span>;
  }
}

// Convenience exports
export function InlineLatex({ children }: { children: string }) {
  return <Latex>{children}</Latex>;
}

export function BlockLatex({ children }: { children: string }) {
  return <Latex block>{children}</Latex>;
}
