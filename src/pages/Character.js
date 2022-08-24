import React from 'react'
import { useCharacter } from './useCharacterhook';
export default function Character() {
    const { loading, error, data } = useCharacter(1);
    console.log("data in6",data,error,loading)
  return (
    <div>character</div>
  )
}
