import { useReducer } from "react";

const initstate={
    name:"",
    type:"",
    rating:"",
    number_of_votes:"",
    price_starts_from:"",
    image:"",
}
const formreducer=(state,action)=>{
const {type,payload}=action;
switch (type){
    case "Change_Input":{
        return {
            ...state,
            [payload.name]:payload.value
        }
    }
    case "reset":{
        return initstate
    }
    default:{
        throw new Error("invalid action type")
    }
}
}
export const Addrestaurant=({handleADD_Restaurant})=>{
  const [state,dispatch]=useReducer(formreducer,initstate);

    const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({
        type:"reset",
    });
    handleADD_Restaurant(state)
    }

    const  handleChange=(e)=>{
        // e.preventDefault()
        let {name,value}=e.target;
        const payload={
            name:name,
            value:value
        };
        if(name==="number_of_votes"||
           name==="price_starts_from"||
           name==="rating"
        ){
            payload.value=+(value);
        }
        dispatch({
            type:"Change_Input",
            payload:payload
        })
    //   console.log(e.target.name,e.target.value)
    }
    const {name,type,rating,number_of_votes,price_starts_from,image}=state;
    
    // console.log(state)
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            
            <input name="name" placeholder="Add name" value={name} onChange={handleChange}/>
              <br />
           
                <select name="type"  value={type}onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="ethnic">Ethnic</option>
                    <option value="cafe">Cafe</option>
                    <option value="casual_dining">Casual Dining</option>
                    <option value="fast_food">Fast Food</option>
                    <option value="fine_dining">Fine Dining</option>
                </select>

            <br />
            
                <select name="rating" value={rating} onChange={handleChange} >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
            <br />
            
                <input name="number_of_votes" placeholder="Add number of votes" value={number_of_votes}onChange={handleChange} />
            <br />
            
                <input name="price_starts_from" placeholder="Add price start" value={price_starts_from}onChange={handleChange} />
            <br />
           
                <input name="image" placeholder="Add image URL" value={image}onChange={handleChange} />
            <br />
            
            {/* <input type="submit" value="Add Restaurant"/> */}
            <button type="submit">submit</button>
            
            </form>
        </div>
    )
}