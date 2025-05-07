import axios from "axios";
import { useDispatch } from "react-redux";
import { updateLoader, updateError, updateData } from "../store/actions/product-list";

function useNetwork() {

  const dispatch = useDispatch()

  async function fatch() {
    dispatch(updateLoader(true))
    dispatch(updateError(''))
    dispatch(updateData([]))
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(updateData(response.data));
      dispatch(updateLoader(false))
    } catch (error) {
      console.log("api error :", error);
      dispatch(updateError('Error occured while fetching data'))
      dispatch(updateLoader(false))
    }

  }

  return {fatch}
}


export default useNetwork