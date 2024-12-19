import { useDispatch, useSelector } from 'react-redux';
import style from './TaskList.module.css';
import { EllipsisOutlined } from '@ant-design/icons';
import TaskItem from './TaskItem';
import { useEffect } from 'react';
import { doOne } from '../features/taskSlice';
import { useTranslation } from 'react-i18next';

const TaskList = () => {
  const { t } = useTranslation();
  const tasks = useSelector((state) => state.task.tasks);
  const isFinishedMain = useSelector((state) => state.timer.isFinishedMain);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFinishedMain) {
      dispatch(doOne());
    }
  }, [isFinishedMain, dispatch]);

  console.log('TaskList');

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>{t('Tasks')}</span>
        <div className={style.more}>
          <EllipsisOutlined />
        </div>
      </div>
      <ul className={style.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
