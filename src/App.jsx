import { useState, useEffect } from "react";
import AddTaskForm from './components/AddTaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'
import './App.css'

function App(){
  //task naam ke variable ko usestate dibba assign kiya hai
  //jaise hi kuch naya aayega vaise hi setTasks usestate me bhar dega
  //abhi startig ke default values di gyi h
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  //useeffect - Action taker / uses dependency array always
  //mtlb badlav aaye aur action krdo
  //useEffect(() => {..function..}, [])
  
  //GET LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if(saved) setTasks(JSON.parse(saved))
  }, []) //page load hone pr , ek baar 

  //SET LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) //action hoga task change hone pr 

  function addTask(name, priority){
    //user naya task daalega to uske key value pairs hai ye
    const newTask = {
      id: Date.now(),     //unique id
      name: name,         //naam of task
      priority: priority, //High/medium/low
      status: 'pending'   //starting me task pending hi rhega
    }
    setTasks([...tasks, newTask])
  }

  function updateStatus(id, newStatus){
    setTasks(tasks.map(task =>

      // ? {...task, status: newStatus} : task
      //ise ternary operator kehte h if else ka shortcut h
      //id match hote hi condtion true ho gyi {...ye chalega...}
      //...task > task ka purana data {id, name} copy
      //status: newStatus purane status ko newstatus se overwrite krdo
      // :task if condition false then return task
      task.id === id ? {...task, status: newStatus} : task
    ))
  }

  function deleteTask(id) {
    //jo id !== hai usko rkho filter krke nayi array bnake
    setTasks(tasks.filter(task => task.id !== id))
  }

  //tasks array pr filter lgake ek filteredlist bna rhe hai
  //if filter all pr h to true return krdo sb task dikha
  //nhi to whi task dikhao jiska status selected filter se match kr rha h
  const filteredTasks = tasks.filter(task =>{
    if(filter === 'all') return true 
    return task.status === filter //agar filter lagaya h to true ho jayega aur vhi dikhega jiska status match kr rha hai
  })

  return (
    <div className="app">
      <h1>✅ Task-Flow</h1>

      {/*props ka concept - app.jsx parent hai uske paas kuch data hai
        us data ko filterbar, etc jo ki child hai smjh paaye isliye 
        props use krte hai its like a tiffin of data
        >Data bhejta hai child ko
      */}
    
      {/*
      
      >PropName = {AsliData Ya Function}
      >sending two kinds of props ya to data (filter or filteredtasks or updateStatus)
      >ya to function (deleteTask or setFilter or addtask)
      >
      
      */}
      
      {/* Component Call - react ko bol rha hai ki addtaskform vala (UI) dabba chipka do 
          addTask prop name hai jiske andar addTask fn ka kaam bhar gya h
          
          basically addTaskForm Component ko hm addTask fn kya kr rha hai ye bta rhe hai
          ek reference link hai jisse component smjh paye ki addTask function call ho tb screen pr kya krna hai*/}
      <AddTaskForm addTask={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        updateStatus={updateStatus} 
        deleteTask={deleteTask} 
      />
    </div>
  )

}
export default App