import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  useEffect(()=>{
   const timer= setInterval(()=>{
      console.log("Namaste React OP");
    },1000);

    return()=>{
      clearInterval(timer);
      console.log("Interval cleared");
    }
  },[])

  console.log("render");
  
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count increase
      </button>
      <h2>Name : {props?.name}</h2>
      <h3>Location : Bangalore</h3>
      <h4>Contact : @nashobha</h4>
    </div>
  );
};
export default User;
