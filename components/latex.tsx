"use client";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexProps {
  children?: string;
  math?: string;
}

export function Latex({ children, math }: LatexProps) {
  const mathString = math || children || '';

  try {
    return <InlineMath math={mathString} />;
  } catch (error) {
    console.error('LaTeX rendering error:', error);
    return <span className="text-destructive">{mathString}</span>;
  }
}

export function BlockLatex({ children, math }: LatexProps) {
  const mathString = math || children || '';

  try {
    return <BlockMath math={mathString} />;
  } catch (error) {
    console.error('LaTeX rendering error:', error);
    return <div className="text-destructive">{mathString}</div>;
  }
}
