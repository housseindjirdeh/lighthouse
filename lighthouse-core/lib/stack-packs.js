/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const stackPacks = require('@lighthouse/stack-packs');

const stackPacksToInclude = [{
  packId: 'wordpress',
  npmOrIconName: 'wordpress',
  requiredStacks: ['js:wordpress']
}];

/**
 * @param {LH.Artifacts} artifacts
 * @return {Array<LH.StackPacks>}
 */
function getStackPacks(artifacts) {
  /** @type {Array<LH.StackPacks>} */
  const packs = [];

  artifacts.Stacks.forEach(pageStack => {
    /** @type {import('@lighthouse/stack-packs').Pack|undefined} */
    let matchedPack;
    stackPacksToInclude.some(stackPackToIncl => {
      if (!stackPackToIncl.requiredStacks.includes(`${pageStack.detector}:${pageStack.id}`)) {
        return false;
      }

      matchedPack = stackPacks.find(pack => pack.id === stackPackToIncl.npmOrIconName);

      return !!matchedPack;
    });

    if (matchedPack) {
      packs.push({
        id: matchedPack.id,
        title: matchedPack.title,
        iconDataURL: matchedPack.iconDataURL,
        descriptions: matchedPack.descriptions,
      });
    }
  });

  return packs;
}

module.exports = {
  getStackPacks,
};
