import { Dispatch } from "react";

export interface ColumnProps {
  text: string;
  id: string;
}

export interface CardProps {
  text: string;
  id: string;
}

export interface AddItemButtonProps {
  dark?: boolean;
}

export interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}
export interface NewItemFormProps {
  onAdd(text: string): void;
}

export interface Task {
  id: string;
  text: string;
}

export interface List extends Task {
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export interface AppStateContextProps {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
}

export interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

export interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

export type Action = AddListAction | AddTaskAction;

export interface Item {
  id: string;
}
