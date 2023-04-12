import Movie from '../Movie/Movie'
export default function MovieList(props){

    return(

        <>
        {
        props.movies.map(a =>{

            return <Movie movie={a} commentHandler={props.commentHandler} />
        })

        
        
        }

        </>
    )
}
