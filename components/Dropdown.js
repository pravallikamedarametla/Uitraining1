import React from "react";

const Dropdown = (props)=>{
    //var list =["kiran","Rupa","Gowtham"];
  return <select>
      {props.list.map((item,index)=>{
          return <option value={index}>{item}</option>
      })}
  </select>
};
export default Dropdown;