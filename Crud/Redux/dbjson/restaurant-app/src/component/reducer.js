function reducer(state,action){
    const {type,payload}=action;
        switch(type){
            case "Fetch_Loading":{
                return {
                    loading:true,
                    data:[],
                    err:false
                }
            }
            case "Fetch_Success":{
                return {
                    loading:false,
                    data:payload,
                    err:false
                }
            }
            case "Fetch_Error":{
                return {
                    loading:false,
                    data:[],
                    err:true
                }
            }
            case "Reset":{
                return {
                    loading:false,
                    data:[],
                    err:false
                }
            }
            default:{
               throw new Error("invalid action type")
             }
        }
    }
    export {reducer}