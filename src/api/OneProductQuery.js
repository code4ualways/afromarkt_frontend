import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { GetOneProduct } from "../Redux/Slices/OneProduct";

const geteverythingleatherOneProduct = async (data) => {
  console.log(data, "dattttt");

  try {
    const res = await axios.get(
      `https://code123.pythonanywhere.com/api/everythingleather/${data?.id}`
    );
    return res;
  } catch (error) {}
};
export const GetOneProducteverythingleatherHook = (data) => {
  const dispatch = useDispatch();
  return useQuery(
    "geteverythingleatherOneProduct",
    () => geteverythingleatherOneProduct(data),
    {
      onSuccess: (res) => {
        dispatch(GetOneProduct(res?.data));
        console.log(res, "resss");
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
      },
      onError: (err) => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        // notify(err?.response?.data?.message, "error");
      },
    }
  );
};
