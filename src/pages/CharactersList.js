import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_CHARACTERS } from "./query";
import "./characterList.css";
import Character from "./Character";
import Search from "./Search";
export default function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  const [individualItem, setIndividualItem] = useState(null);
 const [list, setList] = useState(data);
useEffect(() => {
    setList(data);
  }, []);
  console.log("list",list)
  if (loading) return <div>I am Loadingggg...</div>;
  if (error) return <div>SomeThing went Wrong</div>;
  const handleClick = (item) => {
    const datafiltered = data.characters.results.filter(
      (object) => object.id === item.id
    );
    setIndividualItem(datafiltered);
  };
  const searchItem = (searchText) => {
    const filteredData = data.characters.results.filter((task) =>
      task.name.includes(searchText)
    );
    console.log("filtereddata", filteredData);
  };
  console.log("data",data)

  return (
    <div className="main_container">
      <Search searchItem={searchItem} />
      {individualItem ? (
        <Character individualItem={individualItem} />
      ) : (
        <>
          {data.characters.results.map((item) => {
            return (
              <div
                className="description_container"
                key={item.id}
                onClick={(e) => handleClick(item)}
              >
                <div className="rickmorty_image">
                  <img src={item.image} alt="rickmorty" />
                </div>
                <div className="description">{item.name}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
