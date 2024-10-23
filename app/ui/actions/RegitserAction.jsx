'use server'

const RegisterAction = async (preState, formData) => {
    console.log("sfaidsfqF", formData)
    const data = {
        username : formData.get('username'),
        email : formData.get('email'),
        password : formData.get('password'),
    }
    try{
        const res = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store',
            body: JSON.stringify(data),
        }) 
        const result = await res.json()
        if(response.status !== 200) throw new Error('Invalid login response')
            return {
                message : "create successfully",
                status: "200",
            } 
        
    }catch(e){
        console.log("adsfhewiufejkwf", e)  // log error to console
        return {
            message : "ops failed operation",
            status: "400",
        }
    }
}

export default RegisterAction