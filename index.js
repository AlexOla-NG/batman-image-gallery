const express = require("express");
const app = express();

const images = {
  1: {
    src: "https://storage.googleapis.com/s2444701_ccws_cw1/Batman-51.jpg.optimal.jpg",
    caption: "Batman-51 Cover",
  },
  2: {
    src: "https://storage.googleapis.com/s2444701_ccws_cw1/batman_silhouette.jpg",
    caption: "Batman Silhouette",
  },
  3: {
    src: "https://storage.googleapis.com/s2444701_ccws_cw1/batman_wallpaper.jpg",
    caption: "Batman Wallpaper",
  },
};

// Home route - shows links to all images
app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Batman Image Gallery</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #333;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          color: #0066cc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
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

  res.send(html);
});

// Individual image route
app.get("/images/:id", (req, res) => {
  const id = req.params.id;
  if (!images[id]) {
    return res.status(404).send("Image not found");
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Image ${id}</title>
      <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
        img {
          max-width: 220px;
          max-height: 150px;
          object-fit: contain;
        }
        figcaption {
          background-color: #222;
          color: #fff;
          font: smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
        .back-link {
          display: block;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <figure>
        <img src="${images[id].src}" alt="${images[id].caption}">
        <figcaption>${images[id].caption}</figcaption>
      </figure>
      <a href="/" class="back-link">Back to Gallery</a>
    </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the home page`);
});
