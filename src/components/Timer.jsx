import { useSelector } from 'react-redux';
import style from './Timer.module.css';

const Timer = () => {
  const timer = useSelector((state) => state.counter[state.counter.tab]);
  return <div className={style.timer}>{timer}</div>;
};

export default Timer;
