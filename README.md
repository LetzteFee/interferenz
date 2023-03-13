# Showcase
![canvas](readme-assets/canvas.png)

# Guide
You need to have a typescript compiler installed. If you want to download p5.js with the command below you also need wget. Installation on Arch:
```bash
sudo pacman -S typescript wget
```
## Install
Download this repository and the [p5.js library](https://p5js.org/download/) file and copy it into the src folder.
```bash
git clone https://github.com/LetzteFee/interferenz.git
cd interferenz
wget -O src/p5.js https://github.com/processing/p5.js/releases/download/v1.6.0/p5.js
```

## Compile
Run `tsc` in your terminal.
You need to be in the git folder or in one of its subfolders like `src/`
```bash
tsc
```

## Run
open the `src/index.html` file with a web browser like firefox
