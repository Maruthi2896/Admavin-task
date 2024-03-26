import React, { useState } from "react";
import data from "./Listdata.json";
import "../css/task2.css";
function Task02() {
  const NestedList = ({ items }) => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleExpansion = (itemId) => {
      if (expandedItems.includes(itemId)) {
        setExpandedItems(expandedItems.filter((id) => id !== itemId));
      } else {
        setExpandedItems([...expandedItems, itemId]);
      }
    };

    const renderList = (items, level = 1) => {
      return (
        <ul className="ul">
          {items.map((item) => (
            <li key={item.id} className="li">
              <div onClick={() => toggleExpansion(item.id)} className="div1">
                {item.name}
              </div>
              <div className="div2">
                {expandedItems.includes(item.id) &&
                  item.children.length > 0 &&
                  renderList(item.children, level + 1)}
              </div>
            </li>
          ))}
        </ul>
      );
    };

    return renderList(items);
  };
  return (
    <div>
      <h4>Task02:Problem 2 - Nested List component</h4>
      <NestedList items={data} />
    </div>
  );
}

export default Task02;
