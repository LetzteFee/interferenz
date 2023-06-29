class Vektor {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  calcLength() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
}
class OrtsVektor extends Vektor {
  constructor(x, y, z) {
    super(x, y, z);
  }
  calcVector(v) {
    return new Vektor(v.x - this.x, v.y - this.y, v.z - this.z);
  }
}
const lambda = 10;
const e = 50;
const gitter_konstante = 45;

let vecA, vecB;
let i = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(2);

  vecA = new OrtsVektor(e, width / 2 - gitter_konstante, height / 2);
  vecB = new OrtsVektor(e, width / 2 + gitter_konstante, height / 2);
}
function draw() {
  if (i < width) {
    render();
    i++;
  }
}
function f(x) {
  return 0.5 * Math.sin(2 * PI * (x / lambda));
}
function render() {
  for (let j = 0; j < height; j++) {
    let tmp = new OrtsVektor(0, i, j);
    let strecke_a = vecA.calcVector(tmp).calcLength();
    let strecke_b = vecB.calcVector(tmp).calcLength();
    let gangunterschied = Math.abs(strecke_a - strecke_b);
    stroke((f(lambda / 4) + f(lambda / 4 + gangunterschied)) * 255);
    point(i, j);
  }
}
