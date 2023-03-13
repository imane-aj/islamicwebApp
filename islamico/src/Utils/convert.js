const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

// Set the source and destination folders
// const srcFolder = './src/images';
const destFolder = './public/indexImg';

// Convert the images to WebP format
(async () => {
  const files = await imagemin([`${srcFolder}/*.{jpg,png}`], {
    destination: destFolder,
    plugins: [
      imageminWebp({
        quality: 75
      })
    ]
  });

  console.log(`${files.length} images converted to WebP format.`);
})();