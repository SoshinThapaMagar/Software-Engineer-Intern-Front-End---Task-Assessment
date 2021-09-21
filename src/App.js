import React, {useState} from 'react'

function App() {
  const[count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Front End Task Assessment</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success rounded-circle mx-3 bi bi-plus-lg" onClick={() => setCount(count + 1)}></button>
            <button className="btn btn-danger rounded-circle mx-3 bi bi-dash-lg" onClick={() => setCount(count - 1)} disabled={count===0}></button>
            <button className="btn btn-secondary rounded-circle mx-3 bi bi-arrow-repeat" onClick={() => setCount(0)} disabled={count===0}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
