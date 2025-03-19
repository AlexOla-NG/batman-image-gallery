const imageStyles = require("../styles/image");

function imageTemplate(id, imageData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Image ${id}: ${imageData.caption}</title>
      <style>${imageStyles}</style>
    </head>
    <body>
      <figure>
        <img src="${imageData.src}" alt="${imageData.caption}">
        <figcaption>${imageData.caption}</figcaption>
      </figure>
      <a href="/" class="back-link">Back to Gallery</a>
      <a href="/meta/${id}" class="back-link">Get metadata</a>
    </body>
    </html>
  `;
}

module.exports = imageTemplate;
