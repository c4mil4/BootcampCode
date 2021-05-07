import "./Todo.css";

export default function ToDo({ todos, setTodos }) {

    const removeTodo = title => setTodos(todos.filter(todo => todo.title !== title));

    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== "BUTTON") { 
            const newTodos = [...todos];/* Estoy haciendo una copia de mi array original */
            newTodos[index].completed = !newTodos[index].completed; //accedo al ToDo(my array) del indice cuando se hace click y puedo cambiar la propiedad al ser una copia.
            setTodos(newTodos);

            //Alternativa
            //setTodos(currentTodos => currentTodos.map((todo, idx) => {
            //    return idx === index ? {...todo, completed: !todo.completed} : todo;
            //}))
        }
    }

    return (
        <ul className="list-group">
            {todos.map((todo, index) => {

                return(
                    <li className={`d-flex justify-content-between list-group-item ${todo.completed ? "completed" : ""}`}
                        onClick={e => toggleCompleted(e, index)}> {/* cuando se hace onclick se llama a la funcion que esta entre las llaves entera */}
                        <span>ToDo: {index}: {todo.title}</span>
                        <button className="btn btn-danger" onClick={() => removeTodo(todo.title)}>
                            X
                        </button>
                    </li>
                )
            })}
            
        </ul>
    )
}