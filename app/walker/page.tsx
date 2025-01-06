'use client';

import React from 'react';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import Link from 'next/link';

const sketch: Sketch = (p5) => {

  class Walker {
    x: number;
    y: number;

    constructor(width: number, height: number) {
      this.x = width / 4;
      this.y = height / 4;
    }

    show() {
      p5.stroke(230);
      p5.point(this.x, this.y);
    }

    step() {
      const choice = Math.floor(Math.random() * 4);
      switch (choice) {
        case 0:
          this.x++;
          break;
        case 1:
          this.x--;
          break;
        case 2:
          this.y++;
          break;
        case 3:
          this.y--;
          break;
      }
    }
  }

  let walker: Walker;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.background(30);
    walker = new Walker(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    walker.step();
    walker.show();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center z-10 shadow-lg">
        <Link href="/" className="text-lg font-semibold hover:text-gray-400">
          Back
        </Link>
        <span className="text-lg font-semibold">Random Tree Walker</span>
      </div>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
