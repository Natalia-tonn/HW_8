import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ListItems(){

    const [items, setItem] =  useState([]);
    const [inputValue, setInputValue] = useState("")
    useEffect(() => {

        console.log("Компонент ListItems обновлен");
 
      }, []);

    function addItem(){
if (inputValue !== " "){
    setItem([...items, inputValue])
    setInputValue (" ")
}
    }
    return (
      <div>
        <input type="text"
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
        placeholder= "Введите текст"/>
        <button onClick={addItem}> Добавить </button>
       <ul>
        { items.map((item, index) => (
            <li key={index} >{item}</li>
        ))}
      </ul>
      </div>
    )
}
export default ListItems;