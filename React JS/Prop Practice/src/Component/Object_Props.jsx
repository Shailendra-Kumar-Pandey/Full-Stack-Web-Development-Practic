
const Object_Props =({user})=>{

    // console.log(props.user.name)

    console.log(user)
    return (
        <>
            {/* <h5>user data = {props.user.name},  {props.user.age}, {props.user.city}</h5> */}
            
            <h5>user data = {user.name},  {user.age}, {user.city}</h5>

        </>
    )
}

export default Object_Props;