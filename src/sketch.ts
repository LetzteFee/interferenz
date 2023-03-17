class Point {
  private readonly x: number;
  private readonly y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public delta(x: number, y: number): number {
    return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
  }
}
function render(wellenlaenge_pixel: number, l: Point[]): void {
  function wellen_funktion(ort: number): number {
    const faktor: number = 2 * Math.PI / wellenlaenge_pixel;
    return Math.sin(ort * faktor);
  }

  for (let i: number = 0; i < width; i++) {
    for (let j: number = 0; j < height; j++) {
      let sum: number = 1;
      // alle mit mit einem bestimmten Wert subtrahieren, sodass l[0] eine maximale Amplitude besitzt
      let subtrahent: number = (l[0].delta(i, j) % wellenlaenge_pixel) - (wellenlaenge_pixel * 0.25);
      for (let k: number = 1; k < l.length; k++) {
        sum += wellen_funktion(l[k].delta(i, j) - subtrahent);
      }

      stroke(Math.abs(sum / l.length) * 255);
      point(i, j);
    }
  }
}
function init_render(): void {
  //@ts-ignore
  let anzahl_sender: number = Math.round(Number(document.getElementById("quantity").value));
  //@ts-ignore
  let wellenlaenge_pixel: number = Math.round(Number(document.getElementById("lamda").value));
  if (anzahl_sender < 2 || wellenlaenge_pixel <= 0) return;

  let sender: Point[] = [];
  for (let i: number = 0; i < anzahl_sender; i++) {
    sender.push(new Point(random(width), random(height)));
  }
  console.log(`Starting Rendering with these parameters: Sender: ${anzahl_sender}, lamda: ${wellenlaenge_pixel}`);
  render(wellenlaenge_pixel, sender);
}
function setup(): void {
  createCanvas(800, 800);
  background(128);
  noFill();
  strokeWeight(2);
}
