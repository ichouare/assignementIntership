'use server'


export async function Loginser(prevState, formData) {
    const data = {
        username: 'issam',
        password: '1998',    
    }
    try{const response = await fetch('http://localhost:5000/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify(data),
    })
    const res = await response.json()
    if(response.status !== 200) throw new Error('Invalid login response')
    return {
        status: '200', 
    }
}
    catch(err){
        return {
            status: '400', 
        }
    }
}


