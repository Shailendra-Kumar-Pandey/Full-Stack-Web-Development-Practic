
function Child({data}){

    console.log(data)
    return(
        <>
            {/* <h1>Child</h1> */}


            {
                data.map((e,i)=>{
                    return(
                        <div className="main" key={i}>

                            <p >{e.name}</p>
                            <br />
                            <p >{e.age}</p>
                            <br />
                            <p>{e.city}</p>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Child;