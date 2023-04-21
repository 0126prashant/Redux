import axios from "axios";


const getrestaurant=(params={})=>{
    return axios.get(`http://localhost:8080/restaurants`,{
    params:{
        _page:params.page,
        _limit:params.limit,
        _sort:params.sort,
        _order:params.order
    }
    })
}

export {getrestaurant}


export const postRestaurantData=(restaurantData)=>{
    return axios.post("http://localhost:8080/restaurants",
        restaurantData
    )
}

export const handleDeleteData=(id)=>{
    return axios({
        method:"delete",
        url:`http://localhost:8080/restaurants/${id}`
    })
}