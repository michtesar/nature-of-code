'use client';

import React from 'react';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import Link from 'next/link';

const sketch: Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };

  p5.draw = () => {
    p5.background(30); // Dark background
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute top-0 left-0 right-0 bg-gray-950 text-white p-4 flex justify-between items-center z-10 shadow-lg">
        <Link href="/" className="text-lg font-semibold hover:text-gray-400">
          Back
        </Link>
        <span className="text-lg font-semibold">Random Tree Walker</span>
      </div>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
