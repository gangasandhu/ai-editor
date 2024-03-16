import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Chat from './pages/Chat'
import './styles/darkly.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Documentation from './pages/Documentation'
import Team from './pages/Team'



function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="ai-editor/" element={<Home />} />
          <Route path="ai-editor/chat" element={<Chat />} />
          <Route path="ai-editor/docs" element={<Documentation />} />
          <Route path="ai-editor/team" element={<Team />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
