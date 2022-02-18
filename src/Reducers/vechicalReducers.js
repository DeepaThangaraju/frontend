export const vechicalReducers=(state={vechicals:[]},action)=>{
   switch(action.type)
   {
       case 'VECHICAL_LIST_REQUEST':
           return{
               loading:true,
               vechicals:[]
           }
        case 'VECHICAL_LIST_SUCCESS':
            return{
                loading:false,
                vechicals:action.payload
            }
        case 'VECHICAL_LIST_FAIL':
            return{
               loading:false,
               error:action.payload
            }
            default: return state
   }
}

export const vechicalDetailsReducers=(state={vechical:{review:[]}},action)=>{
    switch(action.type)
    {
        case 'VECHICAL_DETAIL_REQUEST':
            return{
                loading:true,
               ...state
            }
         case 'VECHICAL_DETAIL_SUCCESS':
             return{
                 loading:false,
                 vechical:action.payload
             }
         case 'VECHICAL_DETAIL_FAIL':
             return{
                loading:false,
                error:action.payload
             }
             default: return state
    }
 }