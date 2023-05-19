import React from "react";

const tabArr = [{title: 'tab1' , content: 'content for tab1'},{title: 'tab2' , content: 'content for tab2'},{title: 'tab3' , content: 'content for tab3'}];

const Tabs = (props) => {
    console.log(props);
  return (
   
    <li>
      {
      tabArr.map((item,index) => <ul key={index} onClick={() => props.setCurrentTab(item.content)}>{item.title}</ul>)
      }
      </li>
   
  )
}

export default Tabs;