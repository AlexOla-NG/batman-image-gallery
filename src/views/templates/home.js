const homeStyles = require("../styles/home");

function homeTemplate() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Batman Image Gallery</title>
      <style>${homeStyles}</style>
    </head>
    <body>
      <h1>Batman Image Gallery</h1>
      <p>Select an image to view:</p>
      <ul>
        <li><a href="/images/1">Image 1: Batman-51 Cover</a></li>
        <li><a href="/images/2">Image 2: Batman Silhouette</a></li>
        <li><a href="/images/3">Image 3: Batman Wallpaper</a></li>
      </ul>
    </body>
    </html>
  `;
}

module.exports = homeTemplate;
