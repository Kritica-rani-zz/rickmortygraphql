import React, { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_CHARACTERS } from "./query";
import "./characterList.css";
import Character from "./Character";

export default function CharactersList() {
  const [individualItem,setIndividualItem]=useState(null)
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  if (loading) return <div>I am Loadingggg...</div>;
  if (error) return <div>SomeThing went Wrong</div>;

  const handleClick=(item)=>{
  const datafiltered = data.characters.results.filter((object)=>object.id===item.id)
  setIndividualItem(datafiltered)
  }
  
  return (
    <div className="main_container">
      {individualItem ? <Character individualItem={individualItem}/>
      :<>
      {data.characters.results.map((item) => {
        return (
          <div className="description_container" key={item.id} onClick={(e)=>handleClick(item)}>
            <div className="rickmorty_image">
              <img src={item.image} alt="rickmorty" />
            </div>
            <div className="description">
              {item.name}
            </div>
          </div>
        );
      })}
      </>
      }
      </div>
  );
}
