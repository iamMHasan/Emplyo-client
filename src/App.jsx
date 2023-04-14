import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from './layout/Main'
import Home from './pages/Home'
import AllEmployee from './components/AllEmployee'
import EditForm from './components/EditForm'

function App() {
  const router = createBrowserRouter([
   {
    path : '/',
    element : <Main/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/allEmployee",
        element : <AllEmployee/>
      },
      {
        path : "/edit/:id",
        element : <EditForm/>
      },
    ]
   }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
