import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    const fetchFunction=async()=>{
        const data=await fetch("https://www.mockachino.com/3fdcbffc-c668-41/api/request/sample");
        const res=await data.json()
        return res;
    }

    const data=useQuery({
        queryKey:['sample'],
        queryFn:()=>fetchFunction()
    })

   if(data.isLoading)
   {
    console.log(data)
    return <h1>Loading..</h1>
   }

  return (
    <>
    <p>I am in Home Component</p>
    <div>{JSON.stringify(data)}</div>
    </>
  )
}
