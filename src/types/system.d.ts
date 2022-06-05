import { ListItemData } from './routesApi'

export type DataType = {
  pokemon: ListItemData | []
  item: ListItemData | []
  berry: ListItemData | []
  move: ListItemData | []
}

export type ThemeType = 'light' | 'dark'
