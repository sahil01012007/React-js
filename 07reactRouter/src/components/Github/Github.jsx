import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/sahil01012007')
//         .then((res) => res.json())
//         .then((data) => setData(data))
//     }
// )

  return (
    <div>
      <h1 className='bg-gray-600 text-center m-4 text-3xl text-white p-4'>Github followers: {data.followers}</h1>
      <img src="data.avatar_url" alt="Github picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/sahil01012007")
        return response.json()
}

