import { useActionState } from "react"


const LogIN = ()=>{

    const heandleForm = (prevState, formData)=>{
        const email = formData.get('email')
        const password = formData.get('password')
        const regex = /^[A-Z0-9]+$/i;
        console.log(email, password)

        if(!email){
            return {error: "Email is Required..."}
        }else if(!regex.test(password)){
            return {error: "Password can container only number and alphabetd..."}
        }else{
            return{massage: 'Log in'}
        }
    }

    const [data, login, isPandding] = useActionState(heandleForm);

    // console.log(isPandding)

    return(
        <>
            <h2>Welcome the Log IN Page</h2>
            {
                data?.massage && <span style={{color:'green'}}>{data?.massage}</span>
            }
            {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            <form action={login}>
                <input type="text" defaultValue={data?.email} name="email" placeholder="Enter the Email ID" />
                <br /><br />
                <input type="password" defaultValue={data?.password} name="password" placeholder="Enter the Password " />
                <br /><br />
                <button>Login</button>

            </form>
        </>
    )
}

export default LogIN