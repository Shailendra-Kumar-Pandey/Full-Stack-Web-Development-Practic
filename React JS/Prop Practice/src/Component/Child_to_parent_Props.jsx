
const Child_to_parent_Props = ({userData})=>{

    // console.log(userData)

    return(
        <>
            <input type="text" placeholder="This is Child Component" onChange={(e)=>{userData(e.target.value)}}/>
            <br />
            <br />
        </>
    )
}

export default Child_to_parent_Props;