import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  const[todo,setTodo] = useState("");
  const[todos,setTodos] = useState([]); 

  const handleEdit = (e,itemId)=>{
    let t = todos.filter(i => i.id === itemId);
    // console.log(t);
    setTodo(t[0].todo);
  }

  const handleDelete = (e,itemId)=>{
    let newTodos = todos.filter(item => {
      return item.id !== itemId
    });

    setTodos(newTodos);
  }

  const handleAdd = ()=>{
    (todo === "") ? alert("Todo cannot be blank") : setTodos([...todos,{id: uuidv4() ,todo , isCompleted: false}]);
    setTodo("");
  }

  const handleChange = (e)=>{
    setTodo(e.target.value);
  }

  const handleCheckBox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex(item =>{
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setTodos(newTodos);
  }
  

  return (
    <>
    <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-xl bg-violet-100 h-[80vh]"> 
        <h1 className='text-xl font-bold'>Enter todo</h1>
        <div className="">
          <input type="text" className='p-2 w-[50vw]'onChange={handleChange} value={todo}/> 
          <button onClick={handleAdd} className=" mx-2 bg-violet-700 p-2 px-5 text-white rounded-xl hover:bg-violet-900">Add</button>
        </div>

          <div className="my-4">
            <h1 className='text-xl font-bold'>Your Todo</h1>
            <div className="todos">
              {todos.length === 0 && <div className='m-4'> No todos to display</div>}
            {todos.map(item =>{
                return (<div key={item.id} className="todo flex items-center justify-around w-[500px]">
                  <input name={item.id} type="checkbox" id="" value={todo.isCompleted} onChange={handleCheckBox}  />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="buttons">
                  <button onClick={(e) => handleEdit(e,item.id)} className=" mx-2 bg-violet-700 p-2 px-5 text-white rounded-xl hover:bg-violet-900">Edit</button>
                  <button onClick={(e) => handleDelete(e,item.id)} className=" mx-2 bg-violet-700 p-2 px-5 text-white rounded-xl hover:bg-violet-900">Delete</button>
                </div>
              </div>)
            })}
            </div>
          </div>
      </div>
    </>
  )
}

export default App
