import { Button, Tabs } from 'antd';
import style from './TimerContainer.module.css';
import Timer from './Timer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, pause, skip, start } from '../features/timerSlice';
import { StepForwardOutlined } from '@ant-design/icons';
import classNames from 'classnames';

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
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const tab = useSelector((state) => state.timer.tab);

  console.log('TimerContainer');

  const onChangeTab = (tabIndex) => {
    dispatch(changeTab(items[tabIndex - 1].name));
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = `var(${
      items.find((item) => item.name === tab).color
    })`;
  }, [tab]);

  const getColor = () => {
    return `var(${getTab().color})`;
  };

  const getTab = () => {
    return items.find((item) => item.name === tab);
  };

  return (
    <div className={style.container}>
      <Tabs
        onChange={onChangeTab}
        defaultActiveKey='1'
        items={items}
        centered
        type='card'
        activeKey={getTab().key}
        tabBarGutter={0}
      />

      <Timer />

      <div className={style.actions}>
        <Button
          className={style.actionButton}
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

        <StepForwardOutlined
          onClick={() => dispatch(skip())}
          className={classNames(
            style.skipIcon,
            isRunning ? style.visible : null
          )}
        />
      </div>
    </div>
  );
};

export default TimerContainer;
