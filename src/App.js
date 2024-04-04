import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/tasks/api?id=100')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])

  let data_level = document.querySelectorAll('.task');
  let data;
  [...data_level].forEach((element) => {
    data = element.getAttribute('level');
    element.setAttribute('style',`margin-left: calc(${data} * 50px) `);
  });

  return (
    <div className='tasks-container'>
          {tasks.map(task => {
            return <TaskCard fields={task.fields} />
          })}
    </div>
  );
}


function TaskCard(props) {
  return (
      <div className='task' level={props.fields.level}>
        <div className='name'>{props.fields.name}</div>
        <div className='description'>{props.fields.description}</div>
        <div className='completion'>{props.fields.completion}%</div>
        <div className='date'>{props.fields.date_start}</div>
        <div className='date'>{props.fields.date_end}</div>
        <div className='employee'>{props.fields.supervisor}</div>
        <div className='employee'>{props.fields.executor}</div>
      </div>
  )
}


export default App;
