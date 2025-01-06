'use client';

import React from 'react';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import Link from 'next/link';
import { randomInterval } from '@/app/lib';

const sketch: Sketch = (p5) => {

  class Walker {
    x: number = 0;
    y: number = 0;

    show() {
      p5.stroke(230);
      p5.point(this.x, this.y);
    }

    step() {
      const choice = p5.random();
      if (choice > 0.3) {
        this.x += randomInterval(-1, 1);
        this.y += randomInterval(-1, 1);
      } else {
        const stepX = p5.random();
        const stepY = p5.random();
        this.x += p5.mouseX > p5.width / 2 ? stepX : -stepX;
        this.y += p5.mouseY > p5.height / 2 ? stepY : -stepY;
      }
    }
  }

  let walker: Walker;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.background(30);
    walker = new Walker();
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
