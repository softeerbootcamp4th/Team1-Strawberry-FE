import { useState, useEffect } from "react";
import styled from "styled-components";

import { convertSeconds } from "../../../../core/utils";

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = convertSeconds(time);

  const formatTime = () => {
    return `${days}일 ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };

  return <TimeDisplay>{formatTime()}</TimeDisplay>;
};

export default CountdownTimer;

const TimeDisplay = styled.div`
  ${({ theme }) => theme.Typography.Display1Regular}
  color: #fff;
`;
