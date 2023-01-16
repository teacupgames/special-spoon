const dev = process.env.NODE_ENV === 'development';
import adapter from 'svelte-adapter-github';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      precompress: false,
      domain: '',
      jekyll: false
    }),

    paths:{
        base: dev ? '' : '/special-spoon'
    }
  }
};