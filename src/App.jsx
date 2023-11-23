import './App.scss'
import Nav from './components/nav/Nav'
import AllRoutes from "./routes/AllRoutes"
import  { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function App() {


  return (
    <>
      <SkeletonTheme baseColor='#fff' height="lightgray" duration={0.5}>
      <Nav/>
      <AllRoutes/>
      </SkeletonTheme>
     
    </>
  )
}

export default App
