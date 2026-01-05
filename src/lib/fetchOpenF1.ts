export async function fetchOpenF1<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`OpenF1 error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
