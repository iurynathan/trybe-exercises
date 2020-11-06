const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = [
  'Tarefa 1',
  'Tarefa 2',
  'Tarefa 3',
  'Tarefa 4'
]

function App() {
  return (
    <div className="App">
     {taskList.map((tasks) => task(tasks))}
    </div>
  );
}

export default App;
