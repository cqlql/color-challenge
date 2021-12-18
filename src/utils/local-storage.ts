type keyName = 'challengerName' | 'isLimitTime' | 'time'
// interface keyName:'challengerName' | 'isLimitTime' | 'time'

export function setStorage(
  key: keyName,
  value: string | boolean | number | undefined,
): void {
  if (value !== undefined) localStorage.setItem(key, String(value))
}

export function getStorage(key: keyName): string | null {
  return localStorage.getItem(key)
}
