const got = require('got');
const micro = require('micro');
const playground = require('./index');
const listen = require('test-listen');

it('should render html', async () => {
  const service = playground();

  const url = await listen(micro(service));

  const { body } = await got(url);

  expect(body).toMatchSnapshot('static html');
});
