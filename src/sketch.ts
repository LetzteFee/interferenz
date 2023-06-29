class Point {
  private readonly x: number;
  private readonly y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getX(): number {
    return this.x;
  }
  getY(): number {
    return this.y;
  }
  public delta(x: number, y: number): number {
    return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
  }
}

let sender: Point[];
let wellenlaenge_pixel: number;
let i: number = Infinity;
let faktor: number;

function wellen_funktion(ort: number): number {
  return Math.sin(ort * faktor);
}

function draw(): void {
  if (i < width) {
    for (let j: number = 0; j < height; j++) {
      let sum: number = 1;
      // alle mit mit einem bestimmten Wert subtrahieren, sodass l[0] eine maximale Amplitude besitzt

      let subtrahent: number = (sender[0].delta(i, j) % wellenlaenge_pixel) -
        (wellenlaenge_pixel * 0.25);
      for (let k: number = 1; k < sender.length; k++) {
        sum += wellen_funktion(sender[k].delta(i, j) - subtrahent);
      }

      stroke(Math.abs(sum / sender.length) * 255);
      point(i, j);
    }
    i++;
  }
}

function init_render(): void {
  let anzahl_sender: number = Math.round(
    //@ts-ignore
    Number(document.getElementById("quantity").value),
  );
  wellenlaenge_pixel = Math.round(
    //@ts-ignore
    Number(document.getElementById("lamda").value),
  );

  faktor = 2 * Math.PI / wellenlaenge_pixel;

  if (anzahl_sender < 1 || wellenlaenge_pixel < 1) return;

  sender = [];
  for (let i: number = 0; i < anzahl_sender; i++) {
    sender.push(new Point(random(width), random(height)));
  }

  i = 0;

  stroke(255);
  fill(0, 0, 0);
  sender.forEach(function (s: Point): void {
    ellipse(s.getX(), s.getY(), 10);
  });
  noFill();
}

function setup(): void {
  createCanvas(800, 800);
  background(128);
  noFill();
  strokeWeight(3);
}
