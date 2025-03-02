# React Sentiment Heatmap

A React-based sentiment heatmap that visualizes the sentiment of each word in a given text using the Sentiment library and Framer Motion for animations.

## Features

- Analyze text sentiment using the Sentiment library
- Visualize sentiment with color-coded words (red for negative, green for positive, gray for neutral)
- Animate word appearance with Framer Motion
- Built with modern React (hooks) and TailwindCSS

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/react-sentiment-heatmap.git
cd react-sentiment-heatmap
npm install
```

## Development

Start the development server:

```bash
npm start
```

This will start a development server at http://localhost:3000.

## Building for Production

Build the project for production:

```bash
npm run build
```

This will create optimized production files in the `dist` directory.

## Project Structure

```
├── public/
│   └── index.html       # HTML template
├── src/
│   ├── components/
│   │   └── SentimentHeatmap.jsx  # Main component
│   ├── index.css        # Global styles with Tailwind imports
│   └── index.js         # Application entry point
├── .babelrc             # Babel configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
└── webpack.config.js    # Webpack configuration
```

## Technologies Used

- React 18
- Sentiment 5.0.2
- Framer Motion 10
- TailwindCSS 3
- Webpack 5
- Babel 7

## License

MIT
