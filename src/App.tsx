import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Member } from './pages/member'
import { Achievement } from './pages/achievement'
import { Project } from './pages/project'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/member' element={<Member />} />
          <Route path='/achievement' element={<Achievement />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
