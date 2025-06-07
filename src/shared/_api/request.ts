export const request = async <T>(promise: Promise<{ data: T }>): Promise<T> => {
  try {
    const { data } = await promise
    return data
  } catch (e) {
    // TODO: add loger, redirect, alert

    throw e
  }
}
