import Reviews from './components/common/Reviews/Reviews'
import Contact from './components/pages/Contact/Contact'
import LogIn from './components/pages/Login/Login'
import Register from './components/pages/Login/Register/Register'

const App = () => {
  return (
    <div className='App'>
      <LogIn />
      <Register />
      <Contact />
      <Reviews />
    </div>
  )
}

export default App
