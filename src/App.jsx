import { useEffect, useState } from 'react'
import { filterData, apiUrl } from './data'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { toast } from 'react-toastify'


function App() {

  const [response, setResponse] = useState({})
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const d = await res.json();
        // console.log(d.data)
        setResponse(d.data)
      } catch (error) {
        toast.error("Error occured")
      }
    }

    fetchData()

  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar/>
        
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
          
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
           <Cards data={response} category={category} /> 
        </div>
      </div>
    </div>
  )
}

export default App
