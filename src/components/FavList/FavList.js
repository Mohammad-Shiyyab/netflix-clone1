import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default function FavList (){

    const [favMovies,setFavMovies ] = useState([]);


    async function getFavMovies(){
        let url =`${process.env.REACT_APP_SERVER_URL}/getMovies`;

        let response = await fetch(url,{
            method: 'GET',
        })

        let recivedData = await response.json();
        setFavMovies(recivedData)

       
    }


    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/movies/${id}`;

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
  

        if(response.status === 204){
            getFavMovies();
            

        }

    }
    

    async function handleUpdate (id,data){
        let url =`${process.env.REACT_APP_SERVER_URL}/updateMovies/${id}`;

        let response = await fetch(url,{

            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                 name : 'spider'
                }
            )
            
        })

        
        


    }


    useEffect(()=>{
        getFavMovies();

        // console.log(favMovies)

    },[])

    return (
     <>

     <h3> Fav Movies Page</h3>
     <br/><br/><br/>
{
    favMovies && favMovies.map(a=>{
        return(<>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={a.comment} />
            <Card.Body>
              <Card.Title>{a.title}</Card.Title>
              <Button variant="primary" onClick={()=>handleDelete(a.id)}> Delete </Button>
              <Button variant="primary" onClick={()=>handleUpdate(a.id,a)}> Update </Button>
            </Card.Body>
          </Card><br/>
        </>
        )


    })
}
     </>
    )
}