import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState([]);

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
      {repodata.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table>
          <tbody>
            {repodata.map(repo => (
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App
