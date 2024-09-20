import { Button } from "../Button";

type TaskListProps = {
    title: string;
    tasks: string[];
    taskDescription: string | null;
    onCompleteTask?: (index: number) => void;
    onDeleteTask?: (index: number) => void | undefined;
};

export const TaskList: React.FC<TaskListProps> = ({
    title,
    tasks,
    taskDescription,
    onCompleteTask,
    onDeleteTask,
}) => {
    return (
    <div>
        <h2>{title}</h2>
        <div>
        {tasks.length > 0 ? (
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                {task}
                {onCompleteTask && (
                    <Button
                    onClick={() => onCompleteTask(index)}
                    buttonText="完了"
                    />
                )}
                {onDeleteTask && (
                    <Button
                    onClick={() => onDeleteTask(index)}
                    buttonText="削除"
                    />
                )}
                </li>
            ))}
            </ul>
        ) : (
            taskDescription && <p>{taskDescription}</p>
        )}
        </div>
    </div>
    );
};
