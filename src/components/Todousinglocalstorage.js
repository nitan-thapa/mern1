import React, { useState, useEffect } from "react";

const Todousinglocalstorage = () => {
  const [state, setstate] = useState("");
  let initialstate=[]
  if(localStorage.getItem("list"))
  { 
     initialstate=JSON.parse(localStorage.getItem("list"))

  }
else
{
   initialstate=[]
  
}
const [list, setlist] = useState(initialstate);

  useEffect(() => {

    localStorage.setItem("list",JSON.stringify(list))

  }, [list])


  let addlistitem = (e) => {

    e.preventDefault();
    if(state)
    {

      setlist([...list, state]);
      setstate("");
    }
  };

  let deleteitem = (e, i) => {
    e.preventDefault();
    let l = list.filter((v) => {
      return v != list[i];
    });
    setlist(l);
  };

  let deleteallitem=(e)=>{
      e.preventDefault();
      setlist([])

  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>Add List item</h1>
          <div className="input-group mb-3">
            <input
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Add to list"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <i
              onClick={addlistitem}
              className=" text-success fa fa-plus input-group-text "
              id="basic-addon2"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>

      {list.map((value, i) => {
        return (
          <div key={i} className="row justify-content-center">
            <div className="col-6">
              <h1>
              {i+1} {" "} {value}{" "}
                <span
                  onClick={(e) => {
                    deleteitem(e, i);
                  }}
                  className="badge bg-secondary"
                >
                  <i className=" text-danger fa fa-trash" aria-hidden="true"></i>
                </span>
              </h1>
            </div>
          </div>
        );
      })}

      {list.length == 0 ? (
            <div className="row justify-content-center">
            <div className="col-4 text-center">
              <h1 className="text-primary">ADD LIST</h1>
            </div>
          </div>
        
      ) : (
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <button onClick={deleteallitem} type="button" className="btn btn-danger">clear all list</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Todousinglocalstorage;
