const React = require('react');
const Layout = require('./src/components/layout').default;

require('typeface-source-code-pro');

require('prismjs/themes/prism.css');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
};
