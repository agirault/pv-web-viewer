module.exports = [
  {
    test: /\.glsl$/i,
    include: /node_modules(\/|\\)vtk\.js(\/|\\)/,
    loader: 'shader-loader',
  },
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)vtk\.js(\/|\\)/,
    use: [{ loader: 'babel-loader', options: { presets: ['env', 'react'] } }],
  },
  {
    test: /\.svg$/,
    include: /node_modules(\/|\\)vtk\.js(\/|\\)/,
    use: [{ loader: 'raw-loader' }],
  },
];
