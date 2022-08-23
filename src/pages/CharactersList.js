import React from 'react';
import { useQuery,gql } from '@apollo/client/react';
import { GET_CHARACTERS } from './query';

export default function CharactersList() {
   const {error,data,loading} = useQuery(GET_CHARACTERS)
   console.log(error,data,loading)
if(loading) return<div>I am Loadingggg...</div>
  return (
    <div>charactersList</div>
  )
}
