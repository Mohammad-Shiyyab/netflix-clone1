import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";
import addMovie from "../api/addMovie";
 function ModalMovie(props){
    const [formData,setFormData]=useState({comment :""})
    let x=`https://image.tmdb.org/t/p/original//${props.movie.poster_path}`
    const [error,setError] =useState("")

    const onChangeData = (event)=>{
        setFormData({...formData , [event.target.name] : event.target.value})
    }
    async function submitData(event) {
        event.preventDefault()
        try{
            await addMovie({
                ...props,
                comment :formData.comment
            });
            
        }catch(error){
            setError(error)
        }
    };

    return(

        <>
        <Modal show={props.show}onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>

            </Modal.Header>

            <img src={x} alt={props.movie.title}  />  <br/>

            <Modal.Body>{props.movie.overview}</Modal.Body>

            <form>

                <lable>Comment</lable>
                <input type ="textarea" name='comment' value={formData.comment}  onChange={onChangeData}   />

            </form>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} >close
                </Button>

                <Button variant="primary" onClick={submitData} >  
                save Changes 
                </Button>
            </Modal.Footer>
        </Modal>
        
        
        
        
        
        </>
    )
}
export default ModalMovie;