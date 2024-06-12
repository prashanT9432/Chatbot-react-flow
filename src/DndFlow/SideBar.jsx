import React from "react";
import { Panel } from "reactflow";
import "./dndFlow.css";
export default ({ nodeName, setNodeName, onSave }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="panel">

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >&nbsp;&nbsp;
        <img
          src="src\assets\message-icon-512x463-tqzmxrt7.png"
          style={{ height: "20px" }}
        ></img>
        &nbsp;&nbsp;&nbsp;&nbsp;<br />
        <span>Message node</span>
      </div>
      </div>
      <hr></hr>
      <br></br>
      <div className="update">
        <label>Text </label>
        <br />
        <br />
        <textarea
          type="textarea"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
        ></textarea>
      </div><br/>
           <Panel>
        <button className="btn" onClick={onSave}>
          save changes
        </button>

      </Panel>
      <hr />
    </aside>
  );
};
