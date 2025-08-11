
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23672, hash: '99a35f341d16b9c33e157f3d14269d716ac51d3b6c633e3c9d234f84dc780d9c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17151, hash: 'fcf5c337c817360eeefa5b692febb9e9885938b425e73225d45e0702b319b0e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JPFARIB3.css': {size: 8116, hash: 'JMrTdAXetU8', text: () => import('./assets-chunks/styles-JPFARIB3_css.mjs').then(m => m.default)}
  },
};
