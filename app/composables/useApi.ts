import type { NitroFetchOptions } from 'nitropack';

export function useAPI<T = unknown>(
  url: string,
  options: NitroFetchOptions<string> = {}
) {
  const { $api } = useNuxtApp();
  return $api<T>(url, options);
}
