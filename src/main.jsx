import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/ui/Hero.jsx'
import Imagine from "./components/ui/Imagine.jsx"
import Feedback1 from './components/feedback1.jsx'
import Feedback2 from './components/ui/feedback2.jsx'
import About from './components/ui/about.jsx'
import Team from './components/ui/team.jsx'
import Testimonial from './components/ui/testimonial.jsx'
import Blog from './components/ui/blog.jsx'
import Contact from './components/ui/contact.jsx'
import Footer from './components/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <Navbar/>
   <Hero/>
   <Imagine/>
   <Feedback1/>
   <Feedback2/>
   <Feedback1/>
   <Feedback2/>
   <About/>
   <Team/>
   <Testimonial/>
   <Blog/>
   <Contact/>
  <Footer/>
  </>
)
