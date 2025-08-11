
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/jr-montage/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23683, hash: 'c9d43cbfcf19404ed43a78e257c2a3751f8e2488f1b000765587def82899f42e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17162, hash: '0c11a7e8a4dc5ce971a878fbf92513ba617caf6b5a7ba7556743ad3b83838bdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JPFARIB3.css': {size: 8116, hash: 'JMrTdAXetU8', text: () => import('./assets-chunks/styles-JPFARIB3_css.mjs').then(m => m.default)}
  },
};
