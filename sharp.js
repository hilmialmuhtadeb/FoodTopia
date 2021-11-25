const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/image');
const destination = path.resolve(__dirname, 'dist/image');

if (!fs.existsSync(destination)) {
  fs.mkdir(destination);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(path.resolve(__dirname, `${destination}/${image
      .split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));
});

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(400)
    .toFile(path.resolve(__dirname, `${destination}/${image
      .split('.')
      .slice(0, -1)
      .join('.')}-small.jpg`));
});