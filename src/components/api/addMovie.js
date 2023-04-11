
async function addMovie(e){
    const body =JSON.stringify(e)
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/addMovie`,{
        method :"POST",
        headers: { "Content-Type": "application/json" },
        body: body
    });
    const data =await response.json()
    return data
}
export default addMovie;