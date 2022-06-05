import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'

import { DataType, ThemeType } from 'types/system'

interface AppContextProps {
  theme: ThemeType
  changeTheme: () => void
  data: DataType | undefined
  setData: Dispatch<SetStateAction<DataType | undefined>>
}

interface AppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<AppContextProps>({
  theme: 'light',
  changeTheme: () => undefined,
  data: undefined,
  setData: () => undefined
})

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light')
  const [data, setData] = useState<DataType | undefined>()

  function changeTheme() {
    const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light'

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const value = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

    setTheme(value)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
        data,
        setData
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
