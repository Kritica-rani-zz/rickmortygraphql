import {gql, useQuery} from '@apollo/client'

const GET_ONE_CHARACTER= gql`
query GetCharacter ($id:ID!){
    character(id:$id){
  name
  id
  image
  episode{
    name
      episode
    }

  }
}
`;
export const useCharacter =(id)=>{
    const {data,error,loading} = useQuery(GET_ONE_CHARACTER,{
        variables:{
            id,
        },
    });
    console.log("id",id)
    return{
        data,
        error,
        loading,
    }
}