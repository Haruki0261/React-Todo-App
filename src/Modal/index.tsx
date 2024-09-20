import ReactModal from "react-modal";

interface taskModalProps {
    isOpen: boolean;
    newTask: string;
    addTask: (event: React.FormEvent) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCloseModal: () => void;
}

export const TaskModal: React.FC<taskModalProps> = ({
    isOpen,
    newTask,
    handleInputChange,
    addTask,
    handleCloseModal,
}) => {
    return (
        <div>
            <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            appElement={document.getElementById("root") || undefined}
            >
            <h1>こんにちは</h1>
            <form onSubmit={addTask}>
                <input
                type="text"
                value={newTask}
                placeholder="新しいタスクを入力してください"
                onChange={handleInputChange}
                />
                <button type="submit">追加</button>
                <button onClick={handleCloseModal}>キャンセル</button>
            </form>
            </ReactModal>
        </div>
    );
};
