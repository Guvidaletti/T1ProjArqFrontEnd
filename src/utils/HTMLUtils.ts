export const getMergedClassNames = (...args: (string | number | undefined)[]) =>
  args.filter((c) => Boolean(c)).join(' ');
