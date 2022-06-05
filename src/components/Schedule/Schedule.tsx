import './Schedule.scss';
import { FunctionComponent } from 'react';
import { uniq } from 'ramda';
import Avatar from 'react-avatar';

import { Task } from '../../model';

type Props = {
  date: Date;
  taskList: Task[];
}

const getTasksBasedOnDate = (date: Date, taskList: Task[]) => 
  taskList
    .filter(t => t.date.toLocaleDateString() === date.toLocaleDateString());

const getAllName = (tasks: Task[]) => tasks.map(t => t.name);

const getTaskBasedOnName = (name: String, tasks: Task[]) =>
  tasks
    .filter(t => t.name === name)
    .map(t => {
      return(
        <td key={t.id}>
          {t.task}
        </td>
      )
    })
  

function displayTasks(date: Date, taskList: Task[]) {
  const allTaskToDisplay = getTasksBasedOnDate(date, taskList);
  const allUniqNames = uniq(getAllName(allTaskToDisplay));

  return allUniqNames.map((name, index) => {
    return (
      <tr key={index}>
        <td>
          <Avatar 
            name={name} 
            round={true}
            size="100"
          />
        </td>
        {getTaskBasedOnName(name, allTaskToDisplay)}
      </tr>
    );
  });
}

const Schedule: FunctionComponent<Props> = ({
  date,
  taskList
}) => {
  return (
    <div className='Schedule'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Tasks
            </th>
          </tr>
        </thead>

        <tbody>
          {displayTasks(date, taskList)}
        </tbody>
      </table>

    </div>
  );
}

export default Schedule;