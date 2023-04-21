const Card =({id,image,name,number_of_votes,price_starts_from,rating,type,handleDelete})=>{

    return <>
       
        <div style={{border:"1px solid black",padding:"10px",margin:"10px",width:"50%"}}>
            <img src={image} alt={name} />
            <p>Name: {name}</p>
            <p>votes :{number_of_votes}</p>
            <p>price :{price_starts_from}</p>
            <h3>rating :{rating}</h3>
            <p>{type} {id}</p>
            <button onClick={()=>handleDelete(id)}>Delete</button>
       
        </div>
        
    </>

}
export {Card}

