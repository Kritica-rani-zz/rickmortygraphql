import {React,useState }from 'react'

export default function Search(props) {
    const [name,setName] = useState("")
    const handleChange=(e)=>{
      const search=e.target.value
      setName(search)
      props.searchItem(search)
    }

  return (
    <div><input type ="text" value ={name}onChange={handleChange} placeholder="search name"/>
    
    </div>
  )
}
