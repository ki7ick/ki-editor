type ClsxValue = (Record<string, boolean> | string | undefined)[];

export default function clsx(...args: ClsxValue[]): string {
  return args
    .flat()
    .reduce<string[]>((classes, arg) => {
      if (!arg) return classes;
      if (typeof arg === 'string') return [...classes, arg];
      if (Array.isArray(arg)) return [...classes, ...arg.filter(Boolean)];
      return [
        ...classes,
        ...Object.entries(arg)
          .filter(([, value]) => value)
          .map(([key]) => key),
      ];
    }, [])
    .join(' ');
}
