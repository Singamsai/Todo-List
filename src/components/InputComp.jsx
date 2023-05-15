import React, { useState } from "react";
import "./inpcomp.css";
import { toast } from "react-toastify";

export default function Inputcomp() {
  const [list, setList] = useState([]);
  const [inputvalue, setValue] = useState("");

  function del(id) {
    const newlist = list.filter((ele) => {
      return ele.id !== id;
    });
    setList(newlist);
    toast.success("item deleted from List")
  }
  function edit(id) {
    const newlist = list.filter((ele) => {
      return ele.id === id;
    });
    setValue(newlist[0].inputvalue);
  }
  function status(id) {
    const newlist = list.filter((ele) => {
      if (ele.id === id && ele.status === "Completed") {
        return (ele.status = "Pending");
      }
      if (ele.id === id) {
        return (ele.status = "Completed");
      } else {
        return ele;
      }
    });
    setList(newlist);
  }
  return (
    <div className="inputcomp">
      <div className="inputcomp_nav">
        <h1>Todo APP</h1>
      </div>
      <div className="inputbox">
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="type here..."
        />
        <button
          onClick={() => {
            if (inputvalue.length !== 0) {
              setList([
                ...list,
                {
                  inputvalue: inputvalue,
                  id: Date.now(),
                  status: "Pending",
                },
              ]);
              toast.success("item added to List")
              setValue("");

            }
          }}
        >
          ADD
        </button>
      </div>
      <div className="list_items">
        {list.length !== 0 ? (
          list.map((ele) => {
            return (
              <div className="item">
                <p>{ele.inputvalue}</p>
                <div>
                  <button
                    onClick={() => {
                      edit(ele.id);
                    }}
                    style={{ backgroundColor: "rgb(250, 47, 47)" }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "rgb(156, 75, 248)" }}
                    onClick={() => {
                      status(ele.id);
                    }}
                  >
                    {ele.status}
                  </button>
                  <button
                    onClick={() => {
                      del(ele.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>add your work</h1>
        )}
      </div>
    </div>
  );
}
