import TaskList from "./TaskList";
import NoTask from "./NoTask";
import axios from "axios";

  const ConditionalTaskListRenderer = async ()=> {
    console.log("Attempting conditionalTaskListRenderer");
    //const res = await axios.get("http://localhost:4444/api/v1/todo",{headers:{"Authorization": "Bearer "+localStorage.getItem("token")}}).catch(err=>console.log("Todo existance test failed :" + err));
    const dd = true;
      if (dd) {
        return <TaskList/>
      } else {
        return <NoTask/>
      }
  }
export default ConditionalTaskListRenderer;