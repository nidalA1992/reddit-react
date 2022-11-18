function* generator (commonStyle:string, mixinStyles:string[], cx: Function) {
  for(let i = 0; i < mixinStyles.length; i++) {
    yield cx(commonStyle, mixinStyles[i]);
  }
  return;
}

export function generateClass(commonStyle:string, mixinStyles:string[], cx: Function) {
  const gen = generator(commonStyle, mixinStyles, cx);
  return () => gen.next().value;
}
