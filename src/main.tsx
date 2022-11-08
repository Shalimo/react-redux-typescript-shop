import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Product from './components/pages/product/Product'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </Router>
  </QueryClientProvider>
)
