import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
    return (
        <>  
         <section className="main-card--cointainer">
         {menuData.map((curElem) => {
             const {id, name, image, category, description, price} = curElem;
                return (
                    <> 
                    <div className="card-container" key={id}>
                    <div className="card">
                        <div className="body-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{name}</span>
                            <span className="card-title">{name}</span>
                            <span className="card-description subtle">
                                {description}
                            </span>
                            <div className="card-read">Read</div>
                            <span className="card-tag">Order Now</span>
                            <img src={image} alt="images" className="card-media"></img>
                          
                           
                        </div>
                    </div>
                    </div>
                    </>
                );

            })}
         </section>    
        </>
        
    );
}

export default MenuCard;
