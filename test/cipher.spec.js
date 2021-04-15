
// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "CHULZH HKYPHUH" for "VANESA ADRIANA" with offset 33', () => {
      expect(cipher.encode(33, 'VANESA ADRIANA')).toBe('CHULZH HKYPHUH');
    });

    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    it('should return "chulzh hkyphuh" for "vanesa adriana" with offset 33', () => {
      expect(cipher.encode(33, 'vanesa adriana')).toBe('chulzh hkyphuh');
    });

    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });

    it('should return "Ovsh! @Lsvu" for "Hola! @Elon"', () => {
      expect(cipher.encode(33, 'Hola! @Elon')).toBe('Ovsh! @Lsvu');
    });

    it('should return "Gnkz @?Dknm" for "Hola! @Elon"', () => {
      expect(cipher.encode(-1, 'Hola! @Elon')).toBe('Gnkz @?Dknm');
    });

    it('should return "Cjgv=<;Zgji" for "Hola! @Elon"', () => {
      expect(cipher.encode(-5, 'Hola! @Elon')).toBe('Cjgv=<;Zgji');
    });

  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "VANESA ADRIANA" for "CHULZH HKYPHUH" with offset 33', () => {
      expect(cipher.encode(33, 'CHULZH HKYPHUH')).toBe('VANESA ADRIANA');
    });

    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    it('should return "vanesa adriana" for "chulzh hkyphuh" with offset 33', () => {
      expect(cipher.encode(33, 'chulzh hkyphuh')).toBe('vanesa adriana');
    });

    it('should return " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    });

    it('should return "Hola! @Elon" for "Ovsh! @Lsvu"', () => {
      expect(cipher.encode(33, 'Ovsh! @Lsvu')).toBe('Hola! @Elon');
    });

    it('should return "Hola! @Elon" for "Gnkz @?Dknm"', () => {
      expect(cipher.encode(-1, 'Gnkz @?Dknm')).toBe('Hola! @Elon');
    });

    it('should return "Hola! @Elon" for "Cjgv=<;Zgji"', () => {
      expect(cipher.encode(-5, 'Cjgv=<;Zgji')).toBe('Hola! @Elon');
    });
  });

});