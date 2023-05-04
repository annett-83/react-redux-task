import * as actionsTypes from "./actionTypes";
export function taskComplete(id) {
  return {
    type: actionsTypes.taskCompleted,
    payload: { id, completeTask: true },
  };
}
export function titleChange(id) {
  return {
    type: actionsTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}
export function taskDelete(id) {
  return {
    type: actionsTypes.taskDeleted,
    payload: { id, title: `Task was deleted ${id}` },
  };
} 
