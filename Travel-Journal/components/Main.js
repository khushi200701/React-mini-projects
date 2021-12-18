import React from "react"
import Card from "./Card"
import data from "../data"

export default function Main(){
    const list = data.map(item => {
        return <Card key={item.id} item={item}/>
    })
    
    return(
        <main className="main">
           {list}
        </main>
    )
}