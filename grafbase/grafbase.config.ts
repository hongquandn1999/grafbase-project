import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
});

export default config({
  schema: g,
});
