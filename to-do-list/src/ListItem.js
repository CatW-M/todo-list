import React from "react";

function ListItem(props) {
    return (
        <div>
            <li>{props.task}
            <button class="round" onClick={() => props.removeItem(props.index)}>Done</button>
            </li>
        </div>
      
    );
}





export default ListItem;