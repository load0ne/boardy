export default class IdGenerator {
  private id: number;

  constructor() {
    this.id = 0;
  }

  public get() {
    return ++this.id;
  }

  static hashStringToNumber(str: String): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = IdGenerator.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return Math.abs(h);
  }

  // mdn polyfill (Math.imul)
  static imul(a: number, b: number): number {
    const aHi = (a >>> 16) & 0xffff;
    const aLo = a & 0xffff;
    const bHi = (b >>> 16) & 0xffff;
    const bLo = b & 0xffff;
    return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) << 16) >>> 0) | 0);
  };
}
