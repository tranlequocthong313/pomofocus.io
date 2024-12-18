import { Button, Input } from 'antd';
import style from './TaskForm.module.css';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { forwardRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOne, save, update } from '../features/taskSlice';
import classNames from 'classnames';

const TaskForm = ({ onClose, task, isEditing }, ref) => {
  const [title, setTitle] = useState(task?.title || '');
  const [est, setEst] = useState(task?.est || 1);
  const [note, setNote] = useState(task?.note || '');
  const [finishedCount, setFinishedCount] = useState(task?.finishedCount || 0);
  const [isNoting, setIsNoting] = useState(false);
  const estRef = useRef(null);
  const titleRef = useRef(null);
  const dispatch = useDispatch();

  console.log('TaskForm');

  const saveTask = () => {
    if (!titleRef.current.input.value || !est) {
      return;
    }
    if (!isEditing) {
      dispatch(
        save({
          title,
          note,
          est: +est,
        })
      );

      setEst(1);
      setTitle('');
      setNote('');
      setIsNoting(false);
      titleRef.current.focus();
    } else {
      if (!task) {
        return;
      }
      dispatch(
        update({
          ...task,
          title,
          note,
          finishedCount,
          est: +est,
        })
      );
      onClose();
    }
  };

  const deleteTask = () => {
    if (!task) {
      return;
    }
    dispatch(deleteOne(task.id));
    onClose();
  };

  return (
    <div ref={ref} className={style.container} id='task-form'>
      <div className={style.form}>
        <Input
          placeholder='What are you working on?'
          className={style.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          ref={titleRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              estRef.current.focus();
            }
          }}
        />

        <div className={style.est}>
          <span>{isEditing ? 'Act / Est Pomodoros' : 'Est Pomodoros'}</span>

          <div className={style.estInputs}>
            {isEditing && (
              <>
                <Input
                  value={finishedCount}
                  min={0}
                  step={1}
                  type='number'
                  onChange={(e) => setFinishedCount(e.target.value)}
                />
                <span className={style.seperator}>/</span>
              </>
            )}
            <Input
              value={est}
              ref={estRef}
              onChange={(e) => setEst(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  saveTask();
                }
              }}
            />
            <Button onClick={() => setEst((prev) => Number(prev) + 1)}>
              <CaretUpOutlined />
            </Button>
            <Button
              onClick={() => est > 0 && setEst((prev) => Number(prev) - 1)}
            >
              <CaretDownOutlined />
            </Button>
          </div>

          {(note || isNoting) && (
            <textarea
              value={note}
              placeholder='Some notes...'
              className={style.note}
              onChange={(e) => setNote(e.target.value)}
            />
          )}

          <div className={style.addButtons}>
            {!isNoting && (
              <Button icon={<PlusOutlined />} onClick={() => setIsNoting(true)}>
                Add Note
              </Button>
            )}
            <Button icon={<PlusOutlined />}>Add Project</Button>
          </div>
        </div>
      </div>

      <div className={style.actions}>
        <Button
          className={classNames(
            style.deleteButton,
            isEditing ? style.visible : null
          )}
          onClick={deleteTask}
        >
          Delete
        </Button>
        <div className={style.rightActions}>
          <Button className={style.cancelButton} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={saveTask} className={style.saveButton}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(TaskForm);
