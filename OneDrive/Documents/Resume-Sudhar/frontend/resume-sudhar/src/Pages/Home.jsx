import React from 'react'
import Layout from '../components/Layout'
import {AuroraBackground } from '../components/auroraBackground'
import Template from '../components/Template'
import Video from '../components/Video'
import Template2 from '../components/Template2'
import Footer from '../components/footer'
import Example from '../components/example'

const Home = () => {
  return (
    <div>
    <Layout />
    <AuroraBackground />
    <Template />
    <Video />
    <Template2 />
    <Example />
    <Footer />
    </div>
  )
}

export default Home