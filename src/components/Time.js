import moment from "moment";
import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);
  return <div className='time'>{currentTime}</div>;
}
