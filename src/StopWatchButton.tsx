import React from "react";
import "./styles.css";

type StopwatchButtonProps = {
  // Function to handle the start button click
  handleStart: () => void;
  // Function to handle the stop button click
  handleStop: () => void;
  // Function to handle the reset button click
  handleReset: () => void;
  // Function to handle the lap button click
  handleLap: () => void;
};

export default function StopwatchButton({
  handleStart,
  handleStop,
  handleReset,
  handleLap,
}: StopwatchButtonProps) {
  return (
    <div>
      {/* Button to start the stopwatch */}
      <button className="stopwatch-button" onClick={handleStart}>
        Start
      </button>
      {/* Button to stop the stopwatch */}
      <button className="stopwatch-button" onClick={handleStop}>
        Stop
      </button>
      {/* Button to record a lap time */}
      <button className="stopwatch-button" onClick={handleLap}>
        Lap
      </button>
      {/* Button to reset the stopwatch */}
      <button className="stopwatch-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
