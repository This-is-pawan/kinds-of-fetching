import React from 'react'

const Fetch = () => {
  const feching= async ()=>{
    
  try{
    const fecthing = await fecth(url)
    const response=fetching.JSON();
    const result =response.data
    console.log(result)
  }
  catch{
  }
  }
  return (
    <div>
    Fetch
    
    </div>
  )
}

export default Fetch
