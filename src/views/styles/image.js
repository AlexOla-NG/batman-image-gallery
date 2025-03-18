const imageStyles = `
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
`;

module.exports = imageStyles;
