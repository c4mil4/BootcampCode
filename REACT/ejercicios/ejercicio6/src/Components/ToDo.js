import {useContext} from "react"


export default function ToDo({ todos, setTodos }) {

    const removeTodo = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));

    } //sacar corchetes si no funciona.
    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];/* una copia de mi array original */
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);

            //Alternativa
            //setTodos(currentTodos => currentTodos.map((todo, idx) => {
            //    return idx === index? {...todo, completed: !todo.completed} : todo;
            //}))
        }
    }

    return (
        <ul className="list-group">
            {todos.map((todo, index) => {

                return (
                    <li className={`d-flex justify-content-between list-group-item ${todo.completed ? "completed" : ""}`}
                        onClick={e => toggleCompleted(e, index)}> {/* cuando se hace onclick se llama a la funcion que esta entre las llaves */}
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