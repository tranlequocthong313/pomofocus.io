import { Button, Tabs } from 'antd';
import style from './TimerContainer.module.css';
import Timer from './Timer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, pause, start } from '../features/counter/counterSlice';

const items = [
  {
    key: '1',
    name: 'main',
    label: 'Pomodoro',
    color: '--primary-bg-color',
  },
  {
    key: '2',
    name: 'shortBreak',
    label: 'Short Break',
    color: '--secondary-bg-color',
  },
  {
    key: '3',
    name: 'longBreak',
    label: 'Long Break',
    color: '--third-bg-color',
  },
];

const TimerContainer = () => {
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state) => state.counter);

  const onChangeTab = (tabIndex) => {
    setTab(tabIndex - 1);
    dispatch(changeTab(items[tabIndex - 1].name));
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = `var(${items[tab].color})`;
  }, [tab]);

  const getColor = () => {
    return `var(${items[tab].color})`;
  };

  return (
    <div className={style.container}>
      <Tabs
        onChange={onChangeTab}
        defaultActiveKey='main'
        items={items}
        centered
        type='card'
        tabBarGutter={0}
      />

      <Timer />

      <Button
        className={style.startButton}
        style={{ color: getColor() }}
        color='inherit'
        onClick={() => {
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(start());
          }
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
    </div>
  );
};

export default TimerContainer;
