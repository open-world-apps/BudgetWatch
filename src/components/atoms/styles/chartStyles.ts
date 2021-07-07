import { assign } from 'lodash';

type ColorArray = Array<string>;

const rgbGenerator = (times: number, arr: ColorArray = [], index = 0) => {
    const rnd = Math.round
    const r = Math.random
    const MAX = 255;

    if ( index === times) return;

    if (index < times) {
        arr.push(`rgb(${rnd(r() * MAX)}, ${rnd(r() * MAX)}, ${rnd(r() * MAX)})`);

        rgbGenerator(times, arr, index + 1);
    }

    return arr;
}

const colors = rgbGenerator(10);
