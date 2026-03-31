import mail from 'nodemailer';


const mailRecever= async (to, subject, text)=>{

    const transporter = mail.createTransport({
        service:'gmail',
        auth:{
            user:'uzaifkhan248@gmail.com',
            pass:'sqkp czxb yzch upqn'
        }
    })
    
    
    const mailOption = {
        from:"uzaifkhan248@gmail.com",
        to,
        subject,
        text,
    }
    

    let info = await transporter.sendMail(mailOption)

    console.log(info)
}



export default mailRecever;
