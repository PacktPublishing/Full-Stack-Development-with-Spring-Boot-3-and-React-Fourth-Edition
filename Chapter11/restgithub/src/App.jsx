import { useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css'


function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState([]);

  const [columnDefs] = useState([
    {field: 'full_name', sortable: true, filter: true},
    {field: 'html_url', sortable: true, filter: true},
    {field: 'owner.login', sortable: true, filter: true}, 
    {
      field: 'full_name',
      cellRenderer: params =>
        <button
          onClick={() => alert(params.value)}>
          Press me
        </button>
    }   
]);

  const handleClick = () => {
    axios.get(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepodata(response.data.items))
    .catch(err => console.error(err))
  }      

  return (
    <>
      <input
        value={keyword}
        onChange={e => setKeyword(e.target.value)} 
      />
      <button onClick={handleClick}>Fetch</button>
      <div className="ag-theme-material"
         style={{height: 500, width: 850}}>
        <AgGridReact
          rowData={repodata}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={8}        
        />
      </div>

    </>
  );
}

export default App
