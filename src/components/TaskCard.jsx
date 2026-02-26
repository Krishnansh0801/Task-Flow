// task, updateStatus, deleteTask — TaskList se props mein aaye hain
//task list ke props h laadleeee
function TaskCard({task, updateStatus, deleteTask}){
    return (
        //priority ke hisab se card ka color - className dynamic hai
        // ` inhe backticks kehte h ` ya template literals, iske andar normal text aur js variables bhi likh skte h ${} ye use krke
        //code smjhta h ki  ${iske andar jo js variable h use solve kro}
        //lowercase kiya kyuki css me class name lowercase me rkhte h
        //ye kuch aisa dikhega className = {task-card priority-high} agar high priority h to .task-card ek class hai aur priority-high dusri class h
        <div className={`task-card priority-${task.priority.toLowerCase()}`}>

            {/* Task name — agar done hai toh strikethrough */}
            <p className={task.status === 'done' ? 'done-text' : ''}>
                {task.name}
            </p>

            {/* Priority badge */}
            <span className="priority-badge">
                {task.priority}
            </span>

            {/*Status buttons*/}
            <div className="status-buttons">

                    {/* Pending Button same logic as filter bar  */}
                    <button
                    className={task.status === 'pending' ? 'active-status' : ''}
                    onClick={() => updateStatus(task.id, 'pending')}
                    >
                    🟡 Pending
                    </button>

                    {/* In Progress button */}
                    <button 
                    className={task.status === 'inprogress' ? 'active-status' : ''}
                    onClick={() => updateStatus(task.id, 'inprogress')}
                    >
                    🔵 In Progress
                    </button>

                    {/* Done button */}
                    <button
                    className={task.status === 'done' ? 'active-status' : ''}
                    onClick={() => updateStatus(task.id, 'done')}
                    >
                    🟢 Done
                    </button>

            </div>

            {/* Delete button */}
            <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
            >
                🗑️ Delete
            </button>

        </div>
    )
}

export default TaskCard