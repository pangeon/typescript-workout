type PartialPrimitive = string | number | boolean | symbol | bigint | Function | Date;
export type DeepPartial<T> = T extends PartialPrimitive
  ? T
  : T extends Array<infer U>
  ? DeepPartialArray<U>
  : T extends Map<infer K, infer V>
  ? DeepPartialMap<K, V>
  : T extends Set<infer U>
  ? DeepPartialSet<U>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
type obj = object

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}
interface DeepPartialSet<T> extends Set<DeepPartial<T>> {}
interface DeepPartialMap<K, V> extends Map<DeepPartial<K>, DeepPartial<V>> {}

const x: DeepPartial<Date> = new Date();
const o: obj = {};
const arr: number[] = [1, 2, 3];

function fx<T>(param: DeepPartial<T>): DeepPartial<T> {
    return param;
}

console.log(fx(x));
console.log(fx(44));
console.log(fx(null));
console.log(fx(o));
console.log(fx(arr));
console.log(fx(new Array(o, x, arr)));