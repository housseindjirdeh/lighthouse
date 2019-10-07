/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/* eslint-disable max-len */

'use strict';

const i18n = require('../../lighthouse-core/lib/i18n/i18n.js');

// TODO: get Angular icon
const angularIcon = ``;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve site loading performance by reducing the total bytes delivered by their page in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  total_byte_weight:  'Apply route-level code-splitting to minimize the size of your JavaScript bundles. [Learn more](https://web.dev/route-level-code-splitting-in-angular/). Also, consider precaching assets with the [Angular service worker](https://web.dev/precaching-with-the-angular-service-worker/).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_css: 'If you are using Angular CLI, ensure that builds are generated in production mode. [Learn more](https://angular.io/guide/deployment#enable-runtime-production-mode).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_javascript: 'If you are using Angular CLI, ensure that builds are generated in production mode. [Learn more](https://angular.io/guide/deployment#enable-runtime-production-mode).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unused_javascript: 'If you are using Angular CLI, include source maps into your production build to inspect your bundles. [Learn more](https://angular.io/guide/deployment#inspect-the-bundles).',
  /** Additional description of a Lighthouse audit that tells the user how they can use responsive images in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_responsive_images: 'Consider using the `BreakpointObserver` utility in the Component Dev Kit (CDK) to manage image breakpoints. [Learn more](https://material.angular.io/cdk/layout/overview).',
  /** Additional description of a Lighthouse audit that tells the user how they can use preload to improve performance in the context of the Angular framework. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_rel_preload: 'Preload routes ahead of time to speed up navigation. [Learn more](https://web.dev/route-preloading-in-angular/).',
  /** Additional description of a Lighthouse audit that tells the user and *how* they should reduce the size of the web page's DOM in the context of the Angular framework. Links in (parenthesis) become link texts to additional documentation. */
  dom_size: 'Consider virtual scrolling with the Component Dev Kit (CDK) if very large lists are being rendered. [Learn more](https://web.dev/virtualize-lists-with-angular-cdk/).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

module.exports = {
  id: 'angular',
  iconDataURL: angularIcon,
  title: 'Angular',
  descriptions: {
    'total-byte-weight': str_(UIStrings.total_byte_weight),
    'unminified-css': str_(UIStrings.unminified_css),
    'unminified-javascript': str_(UIStrings.unminified_javascript),
    'unused-javascript': str_(UIStrings.unused_javascript),
    'uses-responsive-images': str_(UIStrings.uses_responsive_images),
    'uses-rel-preload': str_(UIStrings.uses_rel_preload),
    'dom-size': str_(UIStrings.dom_size),
  },
};
module.exports.UIStrings = UIStrings;
