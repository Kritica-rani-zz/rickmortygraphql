import React from 'react'
import { useCharacter } from './useCharacterhook';
export default function Character(props) {
    const {individualItem} =props
    const { loading, error, data } = useCharacter(individualItem[0].id);
     if(loading) return <div>loading..........</div>
     if(error) return <div>Something went wrong</div>
     
  return (
    <div className='indivialItem_container'>
{/* {individualItem.map((item)=>{
    return(
        <>
        <div className='individualItem_img'>
        <img src={item.image} alt="rickyyyy"/>
    </div>
<div className='indivialItem_description'>
    {item.name}
    <p>{item.episode}</p>
</div>
</>
    )
})} */}
  {data.character.name}
  <img src ={data.character.image} alt="rick"/>
 
    </div>
  )
}
