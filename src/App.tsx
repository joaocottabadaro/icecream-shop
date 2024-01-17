import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from "sonner"
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <ThemeProvider storageKey="icecreamshop">

      <Toaster richColors />
      <RouterProvider router={router} />

    </ThemeProvider>
  )
}