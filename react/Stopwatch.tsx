import { useRef, useState } from 'react';
import './Stopwatch.scss';

const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;
const MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND;

function formatTime(timeParam: number) {
  let time = timeParam;
  const parts = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  };
  if (time > MS_IN_HOUR) {
    parts.hours = Math.floor(time / MS_IN_HOUR);
    time %= MS_IN_HOUR;
  }

  if (time > MS_IN_MINUTE) {
    parts.minutes = Math.floor(time / MS_IN_MINUTE);
    time %= MS_IN_MINUTE;
  }

  if (time > MS_IN_SECOND) {
    parts.seconds = Math.floor(time / MS_IN_SECOND);
    time %= MS_IN_SECOND;
  }

  parts.ms = time;
  return parts;
}

function padTwoDigit(number: number) {
  return number >= 10 ? String(number) : `0${number}`;
}

const Stopwatch = () => {
  const [duration, setTotalDuration] = useState<number>(0);
  const [timerId, setTimerId] = useState<null | number>(null);
  // use ref so that state doesn't have to change / rerender
  const lastTickTiming = useRef(0);

  const isRunning = timerId != null;

  const renderDuration = () => {
    const formattedTime = formatTime(duration);
    return `${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}:${padTwoDigit(
      Math.floor(formattedTime.ms / 10),
    )}`;
  };

  const startTimer = () => {
    lastTickTiming.current = Date.now();
    setTimerId(
      window.setInterval(() => {
        const now = Date.now();
        // this is the accurate time passed (using ref start time with calculated now from setInterval)
        const timePassed = now - lastTickTiming.current;
        // set state is not called immediately, use callback to ensure we are using the latest value of duration (else it might be using old duration and self loop)
        setTotalDuration((duration) => duration + timePassed);
        lastTickTiming.current = now;
      }, 1),
    );
  };

  const stopTimer = () => {
    window.clearInterval(timerId as number);
    setTimerId(null);
  };

  const onToggleClick = () => {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const onResetClick = () => {
    setTotalDuration(0);
  };

  return (
    <div className="stopwatch p-20">
      <p className="mb-10">{renderDuration()}</p>
      <div>
        <button onClick={onToggleClick}>{isRunning ? 'Stop' : 'Start'}</button>{' '}
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
