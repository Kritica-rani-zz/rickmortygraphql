import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_CHARACTERS } from "./query";
import "./characterList.css";

export default function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  if (loading) return <div>I am Loadingggg...</div>;
  if (error) return <div>SomeThing went Wrong</div>;
  console.log("data", data);
  const handleClick=(id)=>{
  console.log("id",id)
  }
  return (
    <div className="main_container">
      {data.characters.results.map((item) => {
        return (
          <div className="description_container" key={item.id} onClick={(e)=>handleClick(item.id)}>
            <div className="rickmorty_image">
              <img src={item.image} alt="rickmorty" />
            </div>
            <div className="description">
              {item.name}
            </div>
          </div>
        );
      })}
      </div>
  );
}
