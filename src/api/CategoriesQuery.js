import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { GetAlleverythingleather } from "../Redux/Slices/Categories";

const geteverythingleather = async () => {
  try {
    const res = await axios.get(
      "https://code123.pythonanywhere.com/api/everythingleather/",
      {
        // headers: {
        //   Origin: "http://localhost:3000",
        //   "Access-Control-Allow-Origin": true,
        // },
      }
    );
    return res;
  } catch (error) {}
};
export const GetAlleverythingleatherHook = (formData) => {
  const dispatch = useDispatch();

  return useQuery("geteverythingleather", geteverythingleather, {
    onSuccess: (res) => {
      dispatch(GetAlleverythingleather(res?.data));
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
  });
};
