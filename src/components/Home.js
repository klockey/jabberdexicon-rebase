import React from 'react'
import { PageHeader } from 'rebass'
import WordOfTheDay from './WordOfTheDay'
import Breadcrumb from 'react-breadcrumb'
import Container from './Container'

const Home = () =>
  <div className='Home'>
    <Breadcrumb
      path={'/path/to/section'}
      separatorChar={' - '}
    />
    <Container />
    <PageHeader
      heading='Welcome the Jabberdexicon!'
      description='A little glossary of jargon'
      m={1}
    />
    <WordOfTheDay />
  </div>

export default Home
