import React from "react";

type TASKSPropsType = {
  title: string
  tasks: Array<TasksType>
  students: Array<string>
}

type TasksType = {
  taskId: number
  title: string
  isDone: boolean
}
export const TASKS: React.FC<TASKSPropsType> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <ul>
          {props.tasks.map(task =>{
            return (
              <li key={task.taskId}><input type="checkbox" checked={task.isDone}/>{task.title}</li>
            )
          })}
        </ul>
        <ul>
          {props.students.map((student, index) => {
            return (
              <li key={index}>{student}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

