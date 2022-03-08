import React, {useState,} from 'react';

const Lists = ({
  id, title, completed, todoData, setTodoData, provided, snapshot,
}) => {
 
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompleteChane = (id) => {
        let newTodoData = todoData.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        
        setTodoData(newTodoData);
      };
    
      const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData)
      };

      const handleEditChange = (e) => {
        setEditedTitle(e.target.value);
      };

      const handleSubmit = () => {
        let newTodoData = todoData.map((data) => {
          if (data.id === id) {
            data.title = editedTitle;
          }
          return data;
        });
        setTodoData(newTodoData);
        setIsEditing(false);
      };

      const setisEditing = (id) => {
        let newTodoData = todoData.map((data) => {
          if (isEditing) {
            return(
              <div>editing...</div>
            )
          } else {
            return (
              <div
                key={id}
                {...provided.draggableProps}
                ref={provided.innerRef}>
              </div>
            );
          };
        });
      };
      
  return  ( 
    <div 
        key={id} 
        {...provided.draggableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
        <div className="items-center">
            <input 
                type="checkbox" 
                defaultChecked={completed} 
                onChange={() => handleCompleteChane(id)} 
            />{" "}
            <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
        
        <div className="items-center">
            <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
      
        </div>
       
        <div>
          <button className="px-4 py-2 float-right" onClick={() => setIsEditing(true)}>edit</button>
        </div>
    
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border bg-gray-100">
          <form>
            <input
              className="w-full px-3 py-2 mr-4 text-gray-500"
              value={editedTitle} 
              onChange={handleEditChange}
              autoFocus />
              
          </form>
            
            <button onClick={handleSubmit}>save</button>
          </div>
          
        </div>
                  
   );
 };
  


export default Lists;