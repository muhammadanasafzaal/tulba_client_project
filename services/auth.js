import axios from "axios";


export const createUser =async (values) =>{
    return await axios.post("https://tulba.cyclic.cloud/api/v2/users",values);
  }
  export const getAllRoles = async()=>{
      const res= await axios.get("https://tulba.cyclic.cloud/api/v2/roles");
      const data = await res?.data?.data?.roles
      console.log("res",res?.data?.data?.roles);
  return await data;
  }
