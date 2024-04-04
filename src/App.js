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
        return (
          <div className='task' level={task.fields.level}>
            <div className='name'>{task.fields.name}</div>
            <div className='description'>{task.fields.description}</div>
            <div className='completion'>{task.fields.completion}%</div>
            <div className='date'>{task.fields.date_start}</div>
            <div className='date'>{task.fields.date_end}</div>
            <div className='employee'>{task.fields.supervisor}</div>
            <div className='employee'>{task.fields.executor}</div>
          </div>
        )
      })}
    </div>
  );
}


export default App;
