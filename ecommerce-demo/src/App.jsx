import './App.css'
import { useState } from 'react'
import { products } from './mocks/products.json'
import { Home } from './components/Home'
import { Login } from './Login'
function App() {

  const [user, setUser] = useState([])
  console.log(user)
  return (
    <>
      {
        !user.length > 0
          ?
          <Login setUser={ setUser } />
          :
          <Home products={ products } />
      }
    </>

  )
}

export default App
