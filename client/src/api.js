export const fetchResponse = async(chat)=>{
    try{
        const response = await fetch("http://localhost:3080",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            // we have to send data in the stringfy json object
            body:JSON.stringify({
                // chat is comming as a prop so mapping it
                message:chat.map((message)=>message.message).join("\n")
            })
        })
        const data = await response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
}