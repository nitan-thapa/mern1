let initialstate=[]
if(localStorage.getItem("list"))
{ 
   initialstate=JSON.parse(localStorage.getItem("list"))

}
else
{
 initialstate=[]

}
// if else is done forlocal storage purpos
let reducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case "addtodo":
            if(action.payload)
            {return([...state,action.payload])}
            else
            {return(state)}
        case "deletetodo":
            let newstate=state.filter((value)=>{
                return(value!=state[action.payload])
            })
            return(newstate)
        case "deletealltodo":return([])
        default :return(state)
    }

}

export {reducer}
