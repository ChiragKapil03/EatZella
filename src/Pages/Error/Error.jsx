import { useRouteError } from "react-router-dom";
import error from '../../assets/Error.png'

const Error = () => {
  const er = useRouteError();
  console.log(er);
  // console.log(er);
  return (
    <div className="w-1/3 p-5 rounded-xl mt-10 flex flex-col align-middle border  mx-auto">
        <img src={error} alt="" />
        <h1 className="text-2xl font-bold text-blue-800">{er.data}</h1>
        <h1 className="text-xl font-bold text-red-500"> Status : {er.status} </h1>
        <h1 className="text-xl font-bold">OOps Something Went Wrong</h1>
    </div>
  );
};

export default Error;