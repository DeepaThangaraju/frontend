import axios from "axios";
export const vechicalAction = () => async (dispatch) => {
  try {
    dispatch({ type: "VECHICAL_LIST_REQUEST" });
    const { data } = await axios.get("/api/vechicals");
    dispatch({ type: "VECHICAL_LIST_SUCCESS", payload: data });
  } catch (error) {
      dispatch({type:"VECHICAL_LIST_FAIL",
      payload:error.response && error.response.data.message 
      ? error.response.data.message
    : error.message})
  }
};

export const vechicalDetailsAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: "VECHICAL_DETAIL_REQUEST" });
      const { data } = await axios.get(`/api/vechicals/${id}`);
      dispatch({ type: "VECHICAL_DETAIL_SUCCESS", payload: data });
    } catch (error) {
        dispatch({type:"VECHICAL_DETAIL_FAIL",
        payload:error.response && error.response.data.message 
        ? error.response.data.message
      : error.message})
    }
  };
  
