function setup(): void {
  createCanvas(800, 800);
  background(128);
  noFill();

  let inp: any = createInput("Render", "button");
  inp.mouseClicked(function(): void {
    interface Point {
      x: number,
      y: number
    }
    const wellenlaenge_pixel: number = 20;
    function d(x1: number, y1: number, x2: number, y2: number): number {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
    function wellen_funktion(ort: number): number {
      const faktor: number = 2 * Math.PI / wellenlaenge_pixel;
      return Math.sin(ort * faktor);
    }

    let l1: Point = { x: random(width), y: random(height) };
    let l2: Point = { x: random(width), y: random(height) };

    let delta1: number;
    let delta2: number;
    let gang_unterschied: number;
    let maximale_auslenkung: number;

    let progress: number = 0;
    let current_progress: number;

    background(128);

    for (let i: number = 0; i < width; i++) {
      current_progress = Math.round(i / width * 100);
      if (progress !== current_progress) {
        progress = current_progress;
        console.log(`Progress: ${progress}%`);
      }
      for (let j: number = 0; j < height; j++) {
        delta1 = d(i, j, l1.x, l1.y);
        delta2 = d(i, j, l2.x, l2.y);
        gang_unterschied = Math.abs(delta1 - delta2);
        maximale_auslenkung = 1 + wellen_funktion(wellenlaenge_pixel * 0.75 + gang_unterschied);

        stroke(maximale_auslenkung * 127.5);
        point(i, j);
      }
    }
  });
}
