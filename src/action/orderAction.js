import axios from "axios";
export const createOrder = (order) => async (dispatch,getState) => {
    try {
      dispatch({ type: "ORDER_CREATE_REQUEST" });
  
      const {userLoginReducer:{userInfo}}=getState()
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${userInfo.token}`
        },
      };
      const { data } = await axios.post(
        `/api/orders`,
        order,
        config
      );
      dispatch({
        type: "ORDER_CREATE_SUCCESS",
        payload: data,
      });
     
    } catch (error) {
      dispatch({
        type: "ORDER_CREATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const orderDetails = (id) => async (dispatch,getState) => {
    try {
      dispatch({ type: "ORDER_DETAILS_REQUEST" });
  
      const {userLoginReducer:{userInfo}}=getState()
      const config = {
        headers: {
          Authorization:`Bearer ${userInfo.token}`
        },
      };
      const { data } = await axios.get(
        `/api/orders/${id}`,
        config
      );
      dispatch({
        type: "ORDER_DETAILS_SUCCESS",
        payload: data,
      });
     
    } catch (error) {
      dispatch({
        type: "ORDER_DETAILS_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };