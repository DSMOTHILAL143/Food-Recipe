
import React from 'react'

export const Products = ({data}) => {
  return (
    <div>
        <div className="row">
            {data.map((data,index)=>{
                return(
                <div key={index}className="col-md-4 mb-3">
                <div className="card" style={{"width":"24rem"}}>
                    <img className="card-img-top" src={data.recipe.image} alt="card-image-cap"/>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">{data.recipe.label}</h5>
                            <p className="card-text">Total Amount of Calories : {Math.round(data.recipe.calories)} </p>
                            <a href="#" className="btn btn-primary">Buy</a>
                        </center>
                    </div>
                </div>
            </div>
            )}
            )}
            
            
        </div>
    </div>
  )
}
export default Products