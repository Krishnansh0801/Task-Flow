import { useState } from "react";

//ye ek function hai jiska parameter ek prop name hai jo hmne app.jsx me bnaya tha
function AddTaskForm({addTask}){
    
    //task ka naam store kro
    const [taskName, setTaskName] = useState('')

    //priority store krne ke liye, default medium
    const [priority, setPriority] = useState('Medium')

    function handleSubmit(){
        //input validation
        if(taskName.trim()===''){
            alert('Please Set a Task!')
            return
        }

        //ye line chalte hi addtask prop app.jsx ke paas jake addtask fn (Call) chala deta h nayi array bn jati h
        //isme taskname trim krke bhej rhe hai aur priority bhej rhe
        addTask(taskName.trim(),priority)

        //form clear
        setTaskName('')
        setPriority('Medium')
    }

    return(
        //main div h iska jo css style ke liye class me likha hai
        <div className="add-task-form">
            
            {/* Task Name */}
            <input
                type="text"
                placeholder="Set a Task..."
                value={taskName}

                /*har keystroke pr taskname real time me update hoga*/
                onChange={(e) => setTaskName(e.target.value)}
            />

            {/* Priority Dropdown */}
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="High">🔴 High</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Low">🟢 Low</option>
            </select>

            {/*Submit Button*/}
            <button onClick={handleSubmit}>+ Add Task</button>
        </div>
    )
}
export default AddTaskForm