import style from './Counter.module.css';

const Counter = () => {
  return (
    <div className={style.container}>
      <div className={style.counter}>#1</div>
      <div className={style.description}>Time for a break!</div>
    </div>
  );
};

export default Counter;
