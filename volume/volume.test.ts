//goal: Calculate the volume of prisim
// Vollume = width * length * hight

//30 = 2  * 3 * 5
//volume is 30 when width = 2, length =3 and hight =5

import { calculateVolumeOfaPrism } from './volume';

describe("calculate the volume of a prism", () => {
    test("should calculate the volume correctly", () => {
      const width = 2;
      const length = 3;
      const height = 5;
  
      const volume = calculateVolumeOfaPrism(width, length, height);
  
      expect(volume).toBe(width * length * height);
    });
  
    test("should throw an error when length is negative", () => {
        const width = 2;
        const length = -3;
        const height = 5;
    
        expect(() => calculateVolumeOfaPrism(width, length, height)).toThrow("Length should be possitive");

      });
    test("should throw an error when height is negative", () => {
      const width = 2;
      const length = 3;
      const height = -5;

      expect(() => calculateVolumeOfaPrism(width, length, height)).toThrow("Hight should be possitive");

    });
    test.todo("should throw an error when width is negative");
    test.todo("should throw an error when length is zero");
    test.todo("should throw an error when height is zero");
    test.todo("should throw an error when width is zero");
    test.todo("should throw an error when length is empty");
    test.todo("should throw an error when height is empty");
    test.todo("should throw an error when width is empty");
});