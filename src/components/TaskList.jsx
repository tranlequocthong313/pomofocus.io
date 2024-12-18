import style from './TaskList.module.css';
import { EllipsisOutlined } from '@ant-design/icons';

const TaskList = () => {
  return (
    <div className={style.container}>
      <span>Tasks</span>
      <div className={style.more}>
        <EllipsisOutlined />
      </div>
    </div>
  );
};

export default TaskList;
