import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Adding a new input field
const AddTask =({addTask}) =>{
const[value,updateValue]=useState("");

//to see the value is not an empty container condition and update the single value
const handleSubmit= e =>{
    e.preventDefault();             //form execute agurathuku munadi intha condition execute aganum so preventdefault function tharom
    if(value !=="")
    {
      addTask(value)
      updateValue('');               //it will make the value again empty if we dont give this function the value will be never change
    }
}

//input button field content
return(
  <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={value}
    placeholder="Enter Your Task"
    onChange={e => updateValue(e.target.value)}
    />
    <button type='submit'><i class='material-icons'>add</i></button>  {/* //click panathuku aprm preventdefault condition pogum athu addtask la update agum atha nama todo app la call panuvom */}

  </form>
);
}



//wakeup and freshup condition
const Var1= ()=> {                                                 //2
const addTask = text =>updatetask([...tasks,{text}]);       //to get the properties and mergerd with the old values with new values // input field content
const [tasks,updatetask] = useState([]);                    //3 {text:"Going TO gym",isCompleted:false}


//Toggle task condition
const toggleTask =index =>{                         //6
  const newTask=[...tasks];//spread attribute 
  if(newTask[index].isCompleted)
  {
    newTask[index].isCompleted=false;
  }
  else
  {
    newTask[index].isCompleted=true;               //7
  }
  updatetask(newTask);
}

//delete button
const remove=index =>{                             //10
  const newTask=[...tasks];
  newTask.splice(index,1);
  updatetask(newTask)
}



return(
  <div className='list-of-tasks-todo'>                       {/*//4*/}
    {tasks.map((task,index) =>(
      
      <div className='task-status'>
        
        {/* calling the Toggle Task */}
        <span onClick={() =>toggleTask(index)}        //5
        //If Condition for css excicution
        className={task.isCompleted? "task-name completed-task":"task-name"}>        {/*//8  */}
        {index}{"   "}               {/* //printing condition */}
        {task.text}
        </span>

        {/* Delete Button and calling the remove button                     9                     */}              
        <button onClick={() =>remove(index)}>                  
        <i class ="material-icons">delete</i></button>

      </div>
    ))}

    {/* calling The add Task input field */}
    <AddTask addTask={addTask}/>
  </div>
);
}




ReactDOM.render(<Var1 />,document.getElementById('root'));        //1
