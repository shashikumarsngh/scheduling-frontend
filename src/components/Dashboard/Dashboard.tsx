import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Schedule from '../Schedule';
import data from '../../Data/data';
import './Dashboard.scss';

function Dashboard() {

    const [value, onChange] = useState(new Date());

    return(
        <div className='scheduling-dashboard'>
            <div className='header'>
              Scheduling Dashboard
            </div>
            <div className='dashboard'>
              <Schedule date={value} taskList={data} />
              <div className='calendar'>
              <Calendar 
                onChange={(date: Date) => onChange(date)} 
                value={value} />
              <span className='hint'>Click on previous and tomorrow date to see change in Dashboard</span>
            </div>
            </div>
            
        </div>
    )
}

export default Dashboard; 