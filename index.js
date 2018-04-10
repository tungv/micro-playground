const { renderPlaygroundPage } = require('graphql-playground-html');

module.exports = (options = {}) => (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const finalOptions = Object.assign({ version: '1.4.3' }, options);
  const playground = renderPlaygroundPage(finalOptions);
  res.write(playground);
  res.end();
};
