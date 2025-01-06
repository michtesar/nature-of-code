'use client';

import React from 'react';
import { type Sketch, SketchProps, P5CanvasInstance } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import Link from 'next/link';
import { FaSyncAlt } from 'react-icons/fa';

interface GaussianSketchProps extends SketchProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const sketch: Sketch = (p5: P5CanvasInstance<GaussianSketchProps>) => {
  let reset = false;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.background(30);
  };

  p5.updateWithProps = props => {
    if (props.reset) {
      reset = props.reset;
    }
  };

  p5.draw = () => {
    if (reset) {
      p5.background(30);
    }
    const x = p5.randomGaussian(0, 150);
    p5.noStroke();
    p5.fill(230, 10);
    p5.circle(x, 0, 50);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

export default function Page() {
  const [resetCanvas, setResetCanvas] = React.useState(false);

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center z-10 shadow-lg">
        <Link href="/" className="text-lg font-semibold hover:text-gray-400">
          Back
        </Link>
        <span className="text-lg font-semibold">Gaussian Distribution</span>
      </div>
      <NextReactP5Wrapper sketch={sketch} reset={resetCanvas} />
      <button
        onClick={() => {
          setResetCanvas(!resetCanvas);
        }}
        className="absolute bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none">
        <FaSyncAlt className="w-6 h-6" />
      </button>
    </div>
  );
}
