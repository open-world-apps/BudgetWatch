export type HexArray = Array<Hex>;
type ColorArray = Array<RGB>;
type ColorCode = number;
type HexCode = string;
type RGB = `rgb(${ColorCode}, ${ColorCode}, ${ColorCode})`;
type Hex = `#${HexCode}`;

export const rgbGenerator = (times: number, arr: ColorArray = [], index = 0) => {
    if ( index === times) return;

    if (index < times) {
        const rnd = Math.round
        const r = Math.random
        const MAX = 255;
        
        arr.push(`rgb(${rnd(r() * MAX)}, ${rnd(r() * MAX)}, ${rnd(r() * MAX)})`);

        rgbGenerator(times, arr, index + 1);
    }

    return arr;
}

// Helper function for rgbArrayToHexArray function
export const rgbConverter = (codes: Array<number>): Hex=> {
    let hexCode = ``;

    codes.map(el => {
        let codeFragment = Math.floor(el / 16);

        hexCode += codeFragment.toString(16);
        codeFragment = el % 16;
        hexCode += codeFragment.toString(16);
    });


    return `#${hexCode}`;
};

export const rgbArrayToHexArray = (colorArr: Array<string>, hexArray: HexArray = [], index: number = 0): HexArray | undefined => {

    if (index === colorArr.length) return;
    else { 
        const rgbNumberString: string = colorArr[index].replace('rgb(', '').replace(')', '');
        const rgbCodes: Array<number> = rgbNumberString.split(', ').map(el => parseInt(el));
        hexArray.push(rgbConverter(rgbCodes));

        rgbArrayToHexArray(colorArr, hexArray, index + 1);
    }

    return hexArray;
}

export const generator = (n: number): HexArray => {

    return rgbArrayToHexArray(rgbGenerator(n)!)!;
};
