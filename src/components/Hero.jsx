import React, { useState, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import './Hero.css'

const Hero = () => {
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [isRunning])

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true)
    }
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTime(25 * 60)
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="hero-wrapper">
      <Spline
        className="spline-background"
        scene="https://prod.spline.design/De52UR-k8j4Rylzk/scene.splinecode"
      />
      <div className="overlay" />
      <div className="container" role="main">
        <section className="left" aria-label="Introduction and call to action">
          <h1>
            Master Your Time,<br />
            <span className="purple">Master Your Life</span>
          </h1>
          <p>Kairo combines everything you need to stay productive, focused, and organized in one beautiful interface.</p>
          <div className="btn-group">
            <button className="btn-primary" type="button" aria-label="Get Started">
              Get Started <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
            <button className="btn-secondary" type="button" aria-label="Watch Demo">Watch Demo</button>
          </div>
        </section>
        <section className="right" aria-label="Productivity tools">
          <article className="card-pomodoro" aria-labelledby="pomodoro-title">
            <div className="header">
              <span id="pomodoro-title"> Pomodoro Timer</span>
            </div>
            <div className="timer" aria-live="polite" aria-atomic="true">{formatTime(time)}</div>
            <div className="timer-buttons">
              <button type="button" aria-label="Start timer" onClick={startTimer} disabled={isRunning}>
                Start
              </button>
              <button type="button" aria-label="Reset timer" onClick={resetTimer}>
                Reset
              </button>
            </div>
          </article>
          <article className="card-tasks" aria-labelledby="tasks-title">
            <div className="header">
              <i className="fas fa-tasks" aria-hidden="true"></i>
              <span id="tasks-title">Today's Tasks</span>
            </div>
            <ul className="task-list">
              <li className="completed">
                <input type="checkbox" id="task1" checked disabled />
                <label htmlFor="task1">Morning meeting</label>
              </li>
              <li>
                <input type="checkbox" id="task2" />
                <label htmlFor="task2">Finish project proposal</label>
              </li>
              <li>
                <input type="checkbox" id="task3" />
                <label htmlFor="task3">Call with client</label>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Hero
