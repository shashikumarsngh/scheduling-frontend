import { Task } from "../model";

const today = new Date();

const previousDay = new Date();
previousDay.setDate(today.getDate() - 1);

const nextDay = new Date();
nextDay.setDate(today.getDate() + 1);

const data: Task[] = [
  {
    id: 1,
    name: "Shashi Kumar",
    task: "Previous Day Task 1",
    date: previousDay
  },
  {
    id: 2,
    name: "Amit D",
    task: "Previous Day Task 2",
    date: previousDay
  },
  {
    id: 3,
    name: "Shashi Kumar",
    task: "Task 1",
    date: today
  },
  {
    id: 4,
    name: "John H",
    task: "Task 2",
    date: today
  },
  {
    id: 14,
    name: "John H",
    task: "Task 3",
    date: today
  },
  {
    id: 5,
    name: "Shashi Kumar",
    task: "Next Day Task 1",
    date: nextDay
  },
  {
    id: 6,
    name: "Shashi Kumar",
    task: "Next Day Task 2",
    date: nextDay
  }
];

export default data;
