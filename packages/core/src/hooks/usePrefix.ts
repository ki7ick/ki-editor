const globalPrefix = 'ki-editor';

export default function usePrefix(prefix?: string): [string] {
  return [globalPrefix + '-' + (prefix ?? '')];
}
