import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.scss';
import Me from './components/Me'

function App() {

  const [isSettingsOn, setIsSettingsOn] = useState(false);
  const [session, setSession] = useState(25*60);
  const [time, setTime] = useState(25*60);
  const [rest, setRest] = useState(5*60);
  const [isTimerOn, setIstimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [counter, setCounter] = useState(1);
  
  let beep = useRef()
   
 
  useEffect(() => {
    if (time <= 0) {
      setOnBreak(true);
      playBreakSound();
    
    } else if (!isTimerOn && time === rest) {
      setOnBreak(false);
      
      
    }
    console.log("test");
  }, [time, onBreak, isTimerOn, rest, session, isSettingsOn, counter])

  const playBreakSound = () => {
    beep.current.play()
  }

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = (time % 60)

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    )
  }

  const changeTime = (type, amount) => {
    if (type === "break"){   
      if(rest <= 60 && amount < 0){
        return
      }   
      setRest(prev => prev + amount)     
    }else{
      if(session <= 60 && amount < 0){
        return
      }      
      setSession(prev => prev + amount) 
      if (isTimerOn === false){
        setTime(prev => prev + amount)
      }  
    }
  }

  const resetClock = () => {
    setRest(5*60)
    setSession(25*60)
    setTime(25*60)
    if (isTimerOn){
      setIstimerOn(false)
    }    
  }

  const controlTimer = () => {
      
    let second = 1000
    let date = new Date().getTime()
    let nextDate = new Date().getTime() + second
    let modo = onBreak
   let count = counter
  
  
    if (!isTimerOn){
      
      let interval = setInterval(() => {
        date = new Date().getTime()
        if (date > nextDate){

            setTime((prev) => {
           if (prev <= 0 && !modo){
              //playBreakSound()
              modo = true
             count = count - 1
              //setOnBreak(true) 
              
                          
              return rest
            }else if (prev <= 0 && modo){            
              //playBreakSound()
              modo = false
              count = count +1
              
              
                setCounter(count)
                count = count +1
              
              setOnBreak(false)  
            
                         
              return session
            }else{
              return prev - 1           

            }
           
          })
          nextDate += second
        }
      }, 30)
      localStorage.clear()
      localStorage.setItem("interval-id", interval)
    }

    if(isTimerOn){
      clearInterval(localStorage.getItem("interval-id"))
    }

    setIstimerOn(!isTimerOn)
  }
  
  return (
    <div className="App">
      {!isSettingsOn ? ( <div>
         <div id="timer">
        <h3 id="timer-label">{onBreak ? "BREAK "+counter : "SESSION "+counter}</h3>
        <div id="time-left">
          {formatTime(time)}
        </div>
        <audio src='https://actions.google.com/sounds/v1/alarms/beep_short.ogg' ref={beep} id="beep"></audio>
        <div id="controls-buttons">
          <button id="play-pause" className="button" onClick={() => controlTimer()}>
            {isTimerOn ? (
              <i class="fas fa-pause"></i>
              ): (
               <i class="fas fa-play"></i>
              )}
          </button>
          {isTimerOn ? (
              ""
              ): (
                <button id="reset" className="button" onClick={() => resetClock()}><i class="fas fa-history"></i></button>
              )}
         
        </div>
      </div>
      <div id="panel">
      <button className="button" id="config" onClick={()=>(setIsSettingsOn(true))}><i class="fas fa-cog"></i>Settings</button>
      </div>
      <Me />
      </div> )
      : ( 
        <div id="cog"> 
          <div id="settings">
            <h1>Settings</h1>
            <div id="session-label">
              <h5>Session Length</h5>
              <div className="config">
                    <button className="button" id="session-increment" onClick={() => changeTime("session", 60)}><i class="fas fa-arrow-up"></i></button>
                <div id="session-length" className="block">{formatTime(session)}</div>
                    <button className="button" id="session-decrement" onClick={() => changeTime("session", -60)}><i class="fas fa-arrow-down"></i></button>
                
              </div>
            </div>
             <div id="break-label">
              <h5>Break Length</h5>
              <div className="config">
                    <button className="button" id="break-increment" onClick={() => changeTime("break", 60)}><i class="fas fa-arrow-up"></i></button>
                <div id="break-length" className="block">{formatTime(rest)}</div>
                    <button className="button" id="break-decrement" onClick={() => changeTime("break", -60)}><i class="fas fa-arrow-down"></i></button>
                 
               </div>
            </div>
          </div>
          <div id="panel">
          <button className="button" id="cog" onClick={()=>(setIsSettingsOn(false))}><i class="fas fa-arrow-left"></i> Return</button>
          </div>
          <Me />
        </div>)}
      
     
     
    </div>
  );
}

export default App;
