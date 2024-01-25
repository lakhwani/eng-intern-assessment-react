import React, { useState, useEffect } from "react";
import StopwatchButton from "./StopWatchButton";
import "./styles.css";

export default function Stopwatch() {
  // State for tracking time in milliseconds
  const [time, setTime] = useState<number>(0);
  // State for tracking whether the stopwatch is running
  const [running, setRunning] = useState<boolean>(false);
  // State for storing lap times
  const [laps, setLaps] = useState<number[]>([]);

  // Effect hook to set up the interval when 'running' state changes
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (running) {
      // If running, start the interval to increment time every 10ms
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (interval) {
      // If not running, clear the interval
      clearInterval(interval);
    }
    return () => {
      // Clean up the interval on component unmount or before the next effect runs
      if (interval) clearInterval(interval);
    };
  }, [running]);

  // Function to start the stopwatch
  const handleStart = () => setRunning(true);
  // Function to stop the stopwatch
  const handleStop = () => setRunning(false);
  // Function to reset the stopwatch
  const handleReset = () => {
    setTime(0);
    setRunning(false);
    setLaps([]);
  };
  // Function to record a lap time
  const handleLap = () => setLaps([...laps, time]);

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-heading">Stopwatch ⏱</h1> {/* Heading added */}
      <h2 className="stopwatch-display">{formatTime(time)}</h2>
      <div className="buttons-container">
        <StopwatchButton
          handleStart={handleStart}
          handleStop={handleStop}
          handleReset={handleReset}
          handleLap={handleLap}
        />
      </div>
      <div className="laps-container">
        {laps.map((lap, index) => (
          <p className="lap" key={index}>
            Lap {index + 1}: {formatTime(lap)}
          </p>
        ))}
      </div>
    </div>
  );
}

// Helper function to format the time for display
function formatTime(time: number): string {
  // Format milliseconds into minutes, seconds, and hundredths of a second
  return `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${(
    "0" + Math.floor((time / 1000) % 60)
  ).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`;
}
