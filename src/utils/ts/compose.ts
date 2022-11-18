export function compose<U>(...fns: Function[]) {
  return <E>(initialValue: any): U => 
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue); 
}


function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}
