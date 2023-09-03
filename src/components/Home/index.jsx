// import { useState } from "react";
import classes from "./home.module.css";
export const Layout = (props) => {
    const { text } = props;
    // const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div  className={classes.todo}>
           <input type="text" value={""} />
        <h1>{text}</h1>
     
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
