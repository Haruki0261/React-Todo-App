import { useState } from "react";
import { TaskModal } from "./Modal";
import { Button } from "./Button/index";
import { TaskList } from "./TaskList";


function App() {
  const [showModal, setShowModal] = useState(false);
  // Todoに表示するstateを保持する
  const [tasks, setTasks] = useState<string[]>([]);
  // 新しくinputから入ってきた情報をstateで管理する
  const [newTask, setNewTask] = useState<string>("");
  // 「完了したタスク」というstateを持たせる
  const [completeTasks, setCompleteTasks] = useState<string[]>([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    // Todoに表示するstateをtaskに配列で持たせる
    setTasks([...tasks, newTask]);
    // 入力フォームの欄を空白にする
    setNewTask("");
    setShowModal(false);
  };

  // 完了したタスクを表示するという処理をする
  const addCompleteTask = (index: number) => {
    setCompleteTasks([...completeTasks, tasks[index]]);
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value); // 状態を更新
  };

  const deleteTask = (index: number) => {
    // ボタンを押下したタスクを削除する
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  };

  return (
    <div>
      <Button onClick={handleOpenModal} buttonText="新規登録" />
      <TaskModal
        isOpen={showModal}
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
        handleCloseModal={handleCloseModal}
      />
      <h1>TODOリスト</h1>
      <TaskList
        title="未完了のタスク"
        tasks={tasks}
        taskDescription="タスクは現在登録されておりません"
        onCompleteTask={addCompleteTask}
        onDeleteTask={deleteTask}
      />
      <TaskList
        title="完了したタスク"
        tasks={completeTasks}
        taskDescription=""
      />
    </div>
  );
}


export default App;
