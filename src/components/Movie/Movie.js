import  Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import { useState,useEffect } from "react";
import ModalMovie from '../ModalMovie/ModalMovie'



export default function Movie(props){

    let [show , setShow] = useState(false)
    let handleClose = () => {setShow(false)}
    let handleShow = () => {setShow(true)}

    let i= `https://image.tmdb.org/t/p/original//${props.movie.poster_path}`

    return(


        <>
        
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={i} />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                    {props.movie.release_data}
                </Card.Text>
                <Button variant = "primary" onClick={handleShow}> showDetales</Button>
            </Card.Body>


            </Card>

            <ModalMovie show={show} movie={props.movie} handleClose={handleClose}  commentHandler={props.commentHandler} />


        </>
    )
}