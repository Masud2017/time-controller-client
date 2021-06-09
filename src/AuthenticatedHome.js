import Task from "./Task";
import Modal from 'react-modal';
import {useState} from "react";
import "./AuthenticatedHome.css";
import ConditionalTaskListRenderer from "./ConditionalTaskListRenderer";
import axios from "axios";




const AuthenticatedHome = ()=> {

	const customStyles = {
	  content : {
	    top                   : '50%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)',
	  }
	};



  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }



	return (
			<div>
				<div className = "content-center-text">
                        <button className = "add-task-btn mt-sm-4-add-task-btn" onClick={openModal}>Add task</button>

                         <Modal
                              isOpen={modalIsOpen}
                              onAfterOpen={afterOpenModal}
                              onRequestClose={closeModal}
                              style={customStyles}
                              contentLabel="Example Modal"
                         >

                          <h2 ref={_subtitle => (subtitle = _subtitle)} className = "coda-caption">Add your Task</h2>
                          <div className = "underline"></div>
                          
                          
                          <form>
                            <input type = "text" name = "Name" placeholder = "Task name" className = "form-controll"/><br/>
                            <textarea name = "description" row = "10" col = "30" className = "description"/><br/>
                            <input type = "date" name = "date" placeholder = "Task name" className = "date"/><br/>
                            <input min = "0" type = "number" name = "duration" className = "form-controll"/><br/>

                          </form>
                          <button onClick={closeModal} className = "regular-btn">close</button>
                          <button onClick={closeModal} className = "regular-btn margin-left">Add</button>
                        </Modal>
                    </div>
                    <Task/>
			</div>
		);
}

export default AuthenticatedHome;