import React from 'react';   

  
function JobMap(props) {  
  
  const myLists = ['A', 'B', 'C', 'D', 'E'];  
  const listItems = myLists.map((myList) =>  
    <li>{myList}</li>  
  );  
  return (  
    <div>  
          <h2>React Map Example</h2>  
              <ul>{listItems}</ul>  
    </div>  
  );  
}  
 
 
export default JobMap; 