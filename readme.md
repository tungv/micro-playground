# micro-playground

a wrapper for [graphql-playground-html](https://www.npmjs.com/package/graphql-playground-html) in micro apps

# usage

```js
const playground = require('micro-playground');
const { get, post, router } = require('microrouter');
const { microGraphql } = require('apollo-server-micro');

const schema = require('./my-schema.js');

const service = router(
  get('/graphql', playground({ endpointURL: '/graphql' })),
  post('/graphql', microGraphql({ schema })),
  () => 'not found'
);
```
