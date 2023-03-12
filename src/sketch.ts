interface Point {
  x: number,
  y: number
}
function render(wellenlaenge_pixel: number, l: Point[]): void {
  function d(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
  function wellen_funktion(ort: number): number {
    const faktor: number = 2 * Math.PI / wellenlaenge_pixel;
    return Math.sin(ort * faktor);
  }

  for (let i: number = 0; i < width; i++) {
    for (let j: number = 0; j < height; j++) {
      let sum: number = 0;
      // alle mit mit einem bestimmten Wert subtrahieren, sodass l[0] eine maximale Amplitude besitzt
      let subtrahent: number = (d(i, j, l[0].x, l[0].y) % wellenlaenge_pixel) - (wellenlaenge_pixel * 0.25);
      for (let k = 0; k < l.length; k++) {
        sum += wellen_funktion(d(i, j, l[k].x, l[k].y) - subtrahent);
      }

      stroke(Math.abs(sum / l.length) * 255);
      point(i, j);
    }
  }
}
function init_render(n: number = -1, lamda: number = -1): void {
  let anzahl_sender: number = 2;
  let wellenlaenge_pixel: number = 30;
  if (n > 0) anzahl_sender = n;
  if (lamda > 0) wellenlaenge_pixel = lamda;

  let sender: Point[] = [];
  for (let i: number = 0; i < anzahl_sender; i++) {
    sender[i] = { x: random(width), y: random(height) };
  }
  render(wellenlaenge_pixel, sender);
}
function setup(): void {
  createCanvas(800, 800);
  background(128);
  noFill();
  strokeWeight(2);
  createInput("Render", "button").mouseClicked(init_render);
}
