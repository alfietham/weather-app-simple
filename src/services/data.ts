export interface ApiResponse<T> {
  data?: T
  error?: string
}

const apiFetch = async <T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  return fetch(url, options)
    .then(async (response) =>
      response.ok
        ? { data: (await response.json()) as T }
        : { error: `Error: ${response.status} - ${response.statusText}` }
    )
    .catch((error) => ({
      error: error instanceof Error ? error.message : 'Unknown error',
    }))
}

export { apiFetch }
