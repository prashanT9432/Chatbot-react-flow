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
      <Panel position="top-right">
        <button className="btn" onClick={onSave}>
          save changes
        </button>
      </Panel>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img
          src="src\assets\message-icon-512x463-tqzmxrt7.png"
          style={{ height: "20px" }}
        ></img>{" "}
        &nbsp;&nbsp; <br />
        <span>Message</span>
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
          style={{ width: "100%", height: "35px", borderRadius: "4px" }}
        ></textarea>
      </div>
      <hr />
    </aside>
  );
};
