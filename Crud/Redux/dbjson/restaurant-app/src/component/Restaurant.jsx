import { useReducer,useEffect,useState } from "react"
import { reducer } from "./reducer";
import { getrestaurant ,postRestaurantData,handleDeleteData} from "./api";
import { Card } from "./Card";
import { Addrestaurant } from "./Addrestaurant";

const initstate={
    loading:false,
    data:[],
    err:false
}


const Restaurant=()=>{
  const[state,dispatch]=useReducer(reducer,initstate);
  const [page,setPage]=useState(1);
  const [order,setOrder]=useState("")
  
  const fetchandupdataData=(page,order)=>{
    dispatch({type:"Fetch_Loading"})
    getrestaurant({
      page:page,
      limit:4,
      sort:"number_of_votes",
      order:order
    })
    .then((res)=>{
      dispatch({type:"Fetch_Success",payload:res?.data})
      console.log(res.data)
    })
    .catch(()=>{
      dispatch({type:"Fetch_Error"})
    })
  }
  useEffect(()=>{
    fetchandupdataData(page,order)
  },[page,order])

  const handleADD_Restaurant=(data)=>{
    postRestaurantData(data).then(()=>{
    fetchandupdataData(page,order)
  })
  }
  const handleDelete=(id)=>{
    handleDeleteData(id).then(()=>{
      fetchandupdataData(page,order)
    })
  }
  const {loading,data,err}=state
  return <>
  <Addrestaurant handleADD_Restaurant={handleADD_Restaurant}/>
  <button onClick={()=>setOrder("asc")}>sort by asc</button>
  <button onClick={()=>setOrder("desc")}>sort by desc</button>
  {loading?(<h1>loading...</h1>):err?(<h1>something went wrong</h1>):(data.map((e,i)=><Card key={e.id}{...e} handleDelete={handleDelete}/>))}
  <div style={{display:"flex",}}>
  
    <button onClick={()=>setPage(page-1)}>Prev</button>
    <p>{page}</p>
    <button onClick={()=>setPage(page+1)}>Next</button>
  </div>
  </>

}

export default Restaurant