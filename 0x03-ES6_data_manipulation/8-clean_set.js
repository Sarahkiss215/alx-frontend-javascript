export default function cleanSet(set, startString) {
  const p = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const s = value.substring(startString.length);

      if (s && s !== value) {
        p.push(s);
      }
    }
  }
  return p.join('-');
}
