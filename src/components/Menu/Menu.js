 import React from "react";

 const Menu = ({ items }) => {
   return (
     <div className="section-center">
       {items.map((item) => {
         const { id, nombreProducto, img, desc, precio } = item;
         return (
           <article key={id} className="menu-item">
             <img src={img} alt={nombreProducto} className="photo" />
             <div className="item-info">
               <header>
                 <h4>{nombreProducto}</h4>
                 <h4 className="precio">${precio}</h4>
               </header>
               <p className="item-text">{desc}</p>
             </div>
           </article>
         );
       })}
     </div>
   );
 };

 export default Menu;





