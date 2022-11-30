/*
 * Copyright (c) 2023 Margarita Marmaridou
 * GNU General Public License v3.0
 */

function setup() {
  let cnv = createCanvas(300, 300, WEBGL);
  cnv.parent("sketch");
}

function draw() {
  background(255);
  strokeWeight(1.4)
  stroke(4,158,244)
  smooth();

  rotateX(PI / 1.17 + frameCount * 0.005);
  rotateY(PI / 0.88 + frameCount * 0.005);
  rotateZ(frameCount * 0.005);

  box(80);
}
