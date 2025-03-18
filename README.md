# Batman Image Gallery App

A Node.js application designed to serve Batman images from a Google Cloud Storage bucket. Built for Cloud Computing & Web Services coursework.

## Overview

This application serves Batman images stored in a GCP bucket through a web interface. Users can view specific images by navigating to different URL paths.

### Features

- Home page with links to all available images
- Individual image pages with captions
- Responsive design for viewing on multiple devices
- Deployed on Google App Engine

## URL Paths

- `/` - Home page with links to all images
- `/images/1` - Batman-51 Cover
- `/images/2` - Batman Silhouette
- `/images/3` - Batman Wallpaper

## Project Structure

```
my-image-app/
├── src/
│ ├── routes/ # Route handlers
│ │ ├── home.js # Home route handler
│ │ └── images.js # Image route handler
│ ├── data/
│ │ └── images.js # Image data and metadata
│ └── views/
│ ├── templates/ # HTML templates
│ │ ├── home.js
│ │ └── image.js
│ └── styles/ # CSS styles
│ ├── home.js
│ └── image.js
├── app.js # Main application file
├── package.json # Dependencies and scripts
├── app.yaml # App Engine configuration
└── README.md # This file
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer)
- Google Cloud SDK

### Local Development

1. Clone the repository or download the source code
2. Install dependencies: `npm install`
3. Run the application locally: `npm start`
4. Visit `http://localhost:8080` in your browser

### Deployment to Google App Engine

1. Make sure you have the Google Cloud SDK installed and configured
2. Authenticate with Google Cloud: `gcloud auth login`
3. Set your project ID: `gcloud config set project YOUR_PROJECT_ID`
4. Deploy the application:`gcloud app deploy`
5. Access your deployed application:`gcloud app browse`

## Configuration

### app.yaml

The `app.yaml` file contains configuration for the App Engine deployment:

```yaml
runtime: nodejs16

handlers:
  - url: /.*
script: auto
```

### Images

Images are stored in a Google Cloud Storage bucket and referenced in the `src/data/images.js` file.

## Coursework Requirements

This application fulfills the requirements for viewing images stored in a GCP storage bucket with:

- Support for serving images with appropriate captions
- URL paths that allow viewing specific images
- Testing capabilities both locally and remotely on Google App Engine

## Future Improvements

- Add pagination for larger image collections
- Create a more sophisticated UI with thumbnails

## License

This project is created for educational purposes only.

```
This README provides clear documentation about:
- What the project does
- How it's structured
- How to set it up and run it
- How to deploy it
- How it addresses the coursework requirements

It's comprehensive enough for someone unfamiliar with the project to understand it, while also being helpful for you when you need to revisit the project in the future.
```
