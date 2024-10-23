'use server'

export async function deleteAction(id : number) {
    'use server'
    try{
      const res = await fetch(`http:localhost:3000/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }, )

    }catch(e){
      return 400
    }
    return 200
  }