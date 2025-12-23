export function getNow(): Date {
  const fakeNow = process.env.NEXT_PUBLIC_FAKE_NOW;
  return fakeNow ? new Date(fakeNow) : new Date();
}
