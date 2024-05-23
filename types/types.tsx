export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export interface IContext {
  tasks: ITask[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}
