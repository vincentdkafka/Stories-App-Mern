import React from 'react';
import mongoDB from "../assets/mongoDB.png"
import express from "../assets/express.png"
import react from "../assets/react.png"
import node from "../assets/node.svg"



export default function HomePage(){
    return (
        <>
        <h1 className='text-5xl font-bold text-center text-white px-4'>Daily Day</h1>
        <p className='text-2xl font-medium text-center text-gray-200 px-4'>Simple, Flexible and Usefull</p>

        <section className='grid grid-cols-2 place-items-center gap-6 md:grid-cols-4'>
            <figure className='w-36'>
                <img src={mongoDB} alt="mongoDb logo" />
            </figure>
            <figure className='w-36'>
                <img src={react} alt="react logo" />
            </figure >
            <figure className='w-36'>
                <img src={express} alt="express logo" />
            </figure>
            <figure className='w-36'>
                <img src={node} alt="node logo" />
            </figure>
        </section>
        
        </>
    )
}