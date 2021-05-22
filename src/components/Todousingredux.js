import React ,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodo,deleteAllTodo,deleteTodo } from '../actions/actions';

const Todousingredux = () => {
    console.log("i am frm todolist")
    let dispatch=useDispatch()
    let list=useSelector((props)=>{return(props.reducer)}) 
    const [state, setstate] = useState("");
    let addlistitem = (e) => {
        e.preventDefault();
        dispatch(addTodo(state))
        setstate("");
      };

      useEffect(() => {

        localStorage.setItem("list",JSON.stringify(list))
    
      }, [list])
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
                      e.preventDefault()
                      dispatch(deleteTodo(i))
                    // deleteitem(e, i);
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
            <button onClick={(e)=>{e.preventDefault(); dispatch(deleteAllTodo())}} type="button" className="btn btn-danger">clear all list</button>
          </div>
        </div>
      )}
        </div>

        
    )
}

export default Todousingredux
