import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CounterLike from './components/CounterLike'
import ImageSlider from './components/ImageSlider'
import TemConverter from './components/TemConverter'
import TodoList from './components/TodoList'
import CounterVote from './components/CounterVote'
import Calculator from './components/Calculator'
import CountdownTimer from './components/CountdownTimer'

function App() {

  return (
    <>

    <Banner />
    
    <main>

    <section className="Apps bg-dark-subtle py-4">
      <div className="container">
        
          <div className="row text-center">
            <div className="col">
              <CounterLike />
            </div>
            <div className="col">
              <CounterVote />
            </div>
          </div>

          <ImageSlider />

          <div className="row text-center">
            <div className="col">
              <CountdownTimer />
            </div>
            <div className="col">
              <Calculator />
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <TemConverter />
            </div>
            <div className="col">
              <TodoList />
            </div>
          </div>

      </div>
    </section>

    </main>

    <Footer />
    </>
  )
}

export default App
