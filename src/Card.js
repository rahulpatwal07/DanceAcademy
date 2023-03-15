import React from 'react'
import {Link } from "react-router-dom"
export default function Card(props) {
  return (
    <div>
       <div className="card mx-4 my-5" style={{width: "18rem"}}>
  <img src= {props.source} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <Link to="/" className="btn btn-primary">Know more</Link>
  </div>
</div>
    </div>
  )
}
