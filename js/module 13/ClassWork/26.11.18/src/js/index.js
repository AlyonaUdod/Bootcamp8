'use strict'

import {sum, substr} from './math';
import pow from './math';
import h1 from './createDom';

console.log(sum(2,3,4));
console.log(substr(1,2,3));
console.log(pow(3,3));

let body = document.querySelector('body');
body.append(h1);

