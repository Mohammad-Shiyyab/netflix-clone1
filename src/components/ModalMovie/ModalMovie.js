import { useState ,useRef} from "react";
import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

    export default function ModalMovie(props){
        let x=`https://image.tmdb.org/t/p/original//${props.movie.poster_path}`
        

    function submitHandler(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log(userComment)
        let newMovie = { ...props.movie, userComment }
        props.commentHandler(newMovie, newMovie.id);
    }


    async function addToFav(e){
        e.preventDefault();
      
        let url =`${process.env.REACT_APP_SERVER_URL}/addMovie`;
        
        let data={
            title: props.movie.title, 
            comment : x,
        }
        const response = await fetch (url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      
        const receivedData = await response.json();
        console.log(1111,receivedData)
      
        if (response.status ===201){
          alert("successfully added to database")
        }
      
      
    }


    const commentRef = useRef()
    

    

    return(

        <>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>

            </Modal.Header>

            <img src={x} alt={props.movie.title}  />  <br/>

            <Modal.Body>{props.movie.overview}
            
          <br/>  {(props.movie.comment) ? (props.movie.comment) : "No comment Added "} <br/>

            <form>

                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment:</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                            Submit
                        </Button>

            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}> close
                </Button>

                <Button variant="primary" type="submit" onClick={(e) =>addToFav(e)}>
                add to favorit 
                </Button>
            </Modal.Footer>
        </Modal>
        
        
        
        
        
        </>
    )
}
