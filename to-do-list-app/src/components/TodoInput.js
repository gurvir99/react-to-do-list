export default function TodoInput(props) {

  const { handleAddTasks, taskValue, setTaskValue } = props

  return (
    <header>

      <input value={taskValue} onChange={(e) => {
        setTaskValue(e.target.value)
        }} placeholder="Enter Task..." />

      <button className="add_button" onClick={() => {
        handleAddTasks(taskValue)
        setTaskValue('')
        }}>ADD</button>

    </header>
  )
}
