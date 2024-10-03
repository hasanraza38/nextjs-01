import React from 'react'
import Card from '../components/card'
import axios from 'axios'
interface Users {
    id : number
    name:string
    
}
const Page = async() => {
    const data: array = [];
await axios('https://dummyjson.com/products')
.then((res) => {
    console.log(res)
    data.push(res)
} ).catch((err) => console.log(err))

return (
<>

 <div className='m-7 p-5'>
    <h1 className='text-center font-bold text-4xl text-white my-6'>Products</h1>
    <div className='flex justify-center flex-wrap gap-5'>


{
    data ? data.map((item : Users)=>{
        return(
            <>
            <Card title={item.name} />
            </>
        )
    }) : <h1>loading...</h1>
}
    </div>

 </div>

</>
)
}

export default Page