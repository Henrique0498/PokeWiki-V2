import { AxiosRequestConfig } from 'axios'
import { SWRConfiguration } from 'swr'

export const API_URL = 'https://pokeapi.co/api/v2'

interface ReturnProps {
  url: string
  configAxios: AxiosRequestConfig
  configSWR: SWRConfiguration
}

export function LIST_GET(
  list: string,
  limit: number,
  offset: number
): ReturnProps {
  return {
    url: `/${list}/?limit=${limit}&offset=${offset}`,
    configAxios: { method: 'GET' },
    configSWR: {
      onErrorRetry: (error) => {
        if (error.status === 404) return
      }
    }
  }
}

export function LIST_ALL_GET(list: string, limit: number): ReturnProps {
  return {
    url: `/${list}/?limit=${limit}&offset=${0}`,
    configAxios: { method: 'GET' },
    configSWR: {
      onErrorRetry: (error) => {
        if (error.status === 404) return
      }
    }
  }
}

export function GET_DETAILS_ITEM(slug: string, id: string): ReturnProps {
  return {
    url: `${API_URL}/${slug}/${id}`,
    configAxios: { method: 'GET' },
    configSWR: {}
  }
}
