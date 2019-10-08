/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/* eslint-disable max-len */

'use strict';

const i18n = require('../../lighthouse-core/lib/i18n/i18n.js');

const reactIcon = `data:image/svg+xml,%3Csvg viewBox='-11.5 -10.232 23 20.463' xmlns='http://www.w3.org/2000/svg' %3E%3Ccircle r='2.05' fill='#61dafb'/%3E%3Cg stroke='#61dafb' fill='none'%3E%3Cellipse rx='11' ry='4.2'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(60)'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(120)'/%3E%3C/g%3C/svg%3E`;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the React library. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_css: 'If your build system minifies your CSS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the React library. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_javascript: 'If your build system minifies your JS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the React library. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unused_javascript: 'If you are not server-side rendering, split your JavaScript bundles with [React.lazy()](https://web.dev/code-splitting-suspense/). Otherwise, code-split using a third-party library such as [loadable-components](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve the time to first byte speed metric, in the context of the React library. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  time_to_first_byte: 'If you are server-side rendering any React components, consider using `renderToNodeStream()` or `renderToStaticNodeStream()` to allow the client to receive and hydrate different parts of the markup instead of all at once. [Learn more](https://reactjs.org/docs/react-dom-server.html#rendertonodestream).',
  /** Additional description of a Lighthouse audit that tells the user how they can minimize redirects, in the context of the React library. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  redirects: 'If you are using React Router, minimize usage of the [<Redirect>](https://reacttraining.com/react-router/web/api/Redirect) component.',
  /** Additional description of a Lighthouse audit that tells the user how they can use the Profiler to help measure performance. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  user_timings: 'Use the React DevTools Profiler, which makes use of the Profiler API, to measure the rendering performance of your components. [Learn more.](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)',
  /** Additional description of a Lighthouse audit that tells the user *why* and *how* they should reduce the size of the web page's DOM, in the context of the React library, as well as how to maximize component performance when many DOM nodes are present. Links in (parenthesis) become link texts to additional documentation. */
  dom_size: 'If you are rendering very large lists, consider using a “windowing” library like `react-window` to minimize the number of DOM nodes created. [Learn more](https://web.dev/virtualize-long-lists-react-window/). Also, minimize unecessary re-renders using [shouldComponentUpdate](https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action), [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent), or [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) and [skip effects](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) only until certain dependencies have changed if you are using the Effect hook to improve runtime performance.',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

module.exports = {
  id: 'react',
  iconDataURL: reactIcon,
  title: 'React',
  descriptions: {
    'unminified-css': str_(UIStrings.unminified_css),
    'unminified-javascript': str_(UIStrings.unminified_javascript),
    'unused-javascript': str_(UIStrings.unused_javascript),
    'time-to-first-byte': str_(UIStrings.time_to_first_byte),
    'redirects': str_(UIStrings.redirects),
    'user-timings': str_(UIStrings.user_timings),
    'dom-size': str_(UIStrings.dom_size),
  },
};
module.exports.UIStrings = UIStrings;
