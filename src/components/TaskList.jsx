import TaskCard from './TaskCard'

//app.jsx se tasks, updateStatus, deletetask props me aaye h
function TaskList({tasks, updateStatus, deleteTask}){
    return(
        <div className="task-list">

            {/* agar koi task nahi hai toh message dikhao 
                Handling Empty State without if else 
                (if else is not written under return in react)
                && ke baad vala tbhi work krega jb condition true hogi 
                this is called conditional rendering
                
            ye {curly bracket} isliye use ho rha hai kyuki hm html me js ka logic likh rhe hai 
            */}
            {tasks.length === 0 && (
                <p className='no-tasks'>There are no current Tasks! Add Them 👆</p>
            )}
            
            {/* har task ke liye TaskCard banao - LIST RENDERING
                .map array ke har item ko traverse krta hai jaise for loop
                yha for loop nhi use krte 
                > item pr jaana aur uske badle kuch naya return krna 
                ye fn har ek task pr jaake uske liye ek taskcard bna rha hai jo ki again hmari ek child component h
                jo ki kuch kuch props use kr rhi h
            */}
            {tasks.map((task) => (
                <TaskCard
                    key = {task.id} //unique id de rha 
                    task = {task}   //task ki sari detail
                    updateStatus = {updateStatus}   //ye status badalne vala button ki power
                    deleteTask = {deleteTask}   //delete button chalane ki power
                />
            ))}
            
        </div>
    )
}

export default TaskList