import './App.css'
import Repositories from './Repositories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>
    </>
  )
}

export default App
