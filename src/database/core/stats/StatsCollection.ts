/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { deepCopy } from '../../../utils/deep_copy';
import { contains } from '../../../utils/obj';

/**
 * Tracks a collection of stats.
 *
 * @constructor
 */
export class StatsCollection {
  private counters_: { [k: string]: number } = {};

  incrementCounter(name: string, amount: number = 1) {
    if (!contains(this.counters_, name))
      this.counters_[name] = 0;

    this.counters_[name] += amount;
  }

  get() {
    return deepCopy(this.counters_);
  }
}

