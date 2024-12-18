import { Button, ConfigProvider } from 'antd';
import Counter from '../components/Counter';
import TaskList from '../components/TaskList';
import TimerContainer from '../components/TimerContainer';
import { PlusCircleFilled } from '@ant-design/icons';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <TimerContainer />

      <Counter />

      <TaskList />

      <ConfigProvider
        theme={{ components: { Button: { defaultHoverBg: 'transparent' } } }}
      >
        <Button
          className={style.addButton}
          type='dashed'
          icon={<PlusCircleFilled />}
          iconPosition='start'
        >
          Add Task
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default Home;
