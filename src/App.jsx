import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Second from './components/Second'
import AboutSection from './components/About'
import Why from './components/Why'
import Video from './components/Video'
import Blog from './components/Blog'
// import Whatpeoplesays from './components/Whatpeoplesays'
import Faq from './components/Faq'
import HappyClients from './components/Happyclients'
import Crousel from './components/Crousel'
import Contact from './components/Contact'
import Whyregister from './components/Whyregister'
import ManageServices from './components/Manageservice'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Second />
      <AboutSection />
      <Why />
      <Video />
      <HappyClients />
      <Blog />
      <Crousel />
      {/* <Whatpeoplesays /> */}
      <Faq />
      <ManageServices />
      <Whyregister />
      <Contact />
      <Footer />
    </div>)
}

export default App



