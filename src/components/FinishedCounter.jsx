import { useSelector } from 'react-redux';
import style from './FinishedCounter.module.css';

const descriptions = {
  main: 'Time to focus!',
  shortBreak: 'Time for a break!',
  longBreak: 'Time for a break!',
};

const FinishedCounter = () => {
  const count = useSelector((state) => state.timer[state.timer.tab].count);
  const tab = useSelector((state) => state.timer.tab);
  const selectedTask = useSelector((state) => state.task.selectedTask);

  console.log('Counter');

  const getDescription = () => {
    return (selectedTask && selectedTask.title) || descriptions[tab];
  };

  return (
    <div className={style.container}>
      <div className={style.counter}>#{count}</div>
      <div className={style.description}>{getDescription()}</div>
    </div>
  );
};

export default FinishedCounter;
