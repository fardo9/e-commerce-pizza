type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface RequestOptions<B = undefined> {
  headers?: Record<string, string>
  body?: B
  timeout?: number
  authToken?: string
}

export class HttpClient {
  constructor(private baseURL: string = '/api') {}

  private async request<R, B = undefined>(
    url: string,
    method: HttpMethod,
    options: RequestOptions<B> = {}
  ): Promise<R> {
    const { headers = {}, body, timeout = 10000, authToken } = options

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers
    }

    if (authToken) {
      finalHeaders['Authorization'] = `Bearer ${authToken}`
    }

    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method,
        headers: finalHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal
      })

      if (!response.ok) {
        await this.handleError(response)
      }

      return await response.json()
    } finally {
      clearTimeout(timeoutId)
    }
  }

  private async handleError(response: Response) {
    const status = response.status
    let errorMessage = `HTTP error ${status}`

    try {
      const errorBody = await response.json()
      if (errorBody?.message) {
        errorMessage = errorBody.message
      }
    } catch {}

    if (status === 401) {
      console.error('Unauthorized — Token expired?')
    }

    if (status === 403) {
      console.error('Forbidden — Access denied')
    }

    if (status >= 500) {
      console.error('Server Error')
    }

    throw new Error(errorMessage)
  }

  get<R>(url: string, options?: RequestOptions): Promise<R> {
    return this.request<R>(url, 'GET', options)
  }

  post<R, B>(url: string, body: B, options?: RequestOptions<B>): Promise<R> {
    return this.request<R, B>(url, 'POST', { ...options, body })
  }

  put<R, B>(url: string, body: B, options?: RequestOptions<B>): Promise<R> {
    return this.request<R, B>(url, 'PUT', { ...options, body })
  }

  delete<R>(url: string, options?: RequestOptions): Promise<R> {
    return this.request<R>(url, 'DELETE', options)
  }
}

export const apiClient = new HttpClient('/api')
