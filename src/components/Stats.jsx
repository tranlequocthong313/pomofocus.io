import { useSelector } from 'react-redux';
import style from './Stats.module.css';

const Stats = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const minutes = useSelector((state) => state.timer.main.minutes);

  const getTotalFinishedCount = () => {
    return tasks.reduce((total, task) => total + +task.finishedCount, 0);
  };

  const getTotalEst = () => {
    return tasks.reduce((total, task) => {
      const finishedCount = +task.finishedCount;
      const est = +task.est;
      if (task.done) {
        return total + finishedCount;
      }
      return total + Math.max(finishedCount, est);
    }, 0);
  };

  const getFinishTimeFormat = () => {
    const now = Date.now();
    const leftEst = getTotalEst() - getTotalFinishedCount();
    const time = new Date(now + minutes * leftEst * 60000);
    const hours = time.getHours();
    const mins = time.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${
      mins < 10 ? '0' + mins : mins
    }`;
  };

  const getFinishHourFormat = () => {
    const now = new Date().getTime();
    const leftEst = getTotalEst() - getTotalFinishedCount();
    return Number.parseFloat(
      (
        Math.abs(now - new Date(now + minutes * leftEst * 60000)) / 36e5
      ).toFixed(1)
    );
  };

  return tasks && tasks.length ? (
    <div className={style.container}>
      <div className={style.item}>
        Pomos: <span className={style.number}>{getTotalFinishedCount()}</span>
        <span className={style.seperator}>/</span>
        <span className={style.number}>{getTotalEst()}</span>
      </div>
      <div className={style.item}>
        Finish At: <span className={style.number}>{getFinishTimeFormat()}</span>{' '}
        ({getFinishHourFormat()}h)
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Stats;
