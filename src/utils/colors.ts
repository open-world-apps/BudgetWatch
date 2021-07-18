export type HexArray = Array<Hex>;
export type ColorArray = Array<RGB>;
type ColorCode = number;
type HexCode = string;
type RGB = `rgb(${ColorCode}, ${ColorCode}, ${ColorCode})`;
type Hex = `#${HexCode}`;
type Type = 'hex' | 'rgb';

export const rgbGenerator = (
   times: number,
   arr: ColorArray = [],
   index = 0,
) => {
   if (index === times) return;
   else {
      const rnd = Math.round;
      const r = Math.random;
      const MAX = 255;

      arr.push(`rgb(${rnd(r() * MAX)}, ${rnd(r() * MAX)}, ${rnd(r() * MAX)})`);

      rgbGenerator(times, arr, index + 1);
   }

   return arr;
};

// Helper function for rgbArrayToHexArray function
export const hexGenerator = (
   times: number,
   hexArray: Array<Hex> = [],
   index: number = 0,
): Array<Hex> | undefined => {
   if (index === times) return;
   else {
      const code = () =>
         (((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
            0,
            6,
         );
      hexArray.push(`#${code()}`);

      hexGenerator(times, hexArray, index + 1);
   }

   return hexArray;
};

export const generator = (n: number, type: Type): HexArray | ColorArray => {
   switch (type) {
      case 'rgb':
         return rgbGenerator(n)!;
      case 'hex':
         return hexGenerator(n)!;
   }
};
