import { AxiosRequestConfig } from 'axios'
import api from 'services/api'
import useSWR, { SWRConfiguration } from 'swr'

interface useFetchProps {
  url: string
  configAxios: AxiosRequestConfig
  configSWR: SWRConfiguration
}

type ErrorType = {
  message: string
  status?: number
  info?: undefined
}

const useFetch = <Data = object, Error = object>({
  url,
  configAxios,
  configSWR
}: useFetchProps) => {
  const fetcher = async () => {
    const response = await api
      .get(url, configAxios)
      .then((res) => res)
      .catch((err) => {
        if (err.response) {
          const error: ErrorType = new Error(
            err.response.data.message ?? err.response.data
          )

          error.info = err.response
          error.status = err.response.status
          throw error
        } else if (err.request) {
          const error: ErrorType = new Error(
            'The request was made but no response was received.'
          )

          error.info = err.response
          error.status = err.response.status
          throw error
        } else {
          const error: ErrorType = new Error(
            'Something happened in setting up the request that triggered an Error.'
          )

          error.info = err.response
          error.status = err.response.status
          throw error
        }
      })

    return response.data
  }

  const { data, error, mutate, isValidating } = useSWR<Data, Error>(
    url,
    fetcher,
    configSWR
  )

  return { data, error, isLoading: !data && !error, mutate, isValidating }
}

export default useFetch
