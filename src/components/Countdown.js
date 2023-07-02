import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './UseCountdown';
import styles from "../styles/CountDown.module.css"

const ExpiredNotice = () => {
  return (
    <div className={styles.ExpiredNotice}>
      <span>Expired!!!</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.ShowCounter}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.CountdownLink}
      >
        <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
        <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
        <DateTimeDisplay value={minutes} type={'MINS'} isDanger={false} />
        <DateTimeDisplay value={seconds} type={'SECONDS'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;