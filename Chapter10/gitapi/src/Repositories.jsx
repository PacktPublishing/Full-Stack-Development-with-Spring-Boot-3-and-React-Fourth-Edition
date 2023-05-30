import { useQuery } from '@tanstack/react-query'

function Repositories() {
  const getRepositories = async () => {
    const response = await fetch("https://api.github.com/search/repositories?q=react");
    const data = await response.json();
    return data.items;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  else {
    return (
      <table>
        <tbody>
        {
        data.map(repo =>
          <tr key={repo.id}>
            <td>{repo.full_name}</td>
            <td>
              <a href={repo.html_url}>{repo.html_url}</a>
            </td>
          </tr>  
        )
        }
        </tbody>
      </table>
    )
  }
}

export default Repositories
