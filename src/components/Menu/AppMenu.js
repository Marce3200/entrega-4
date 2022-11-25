// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categorias from "./Categorias";
// import items from "./Platos";
// import logo from "./logo.JPG";

// const todasCategorias = ["todas", ...new Set(items.map((item) => item.Categorias))];

// const AppMenu = () => {
//   const [menuItems, setMenuItems] = useState(items);
//   const [activeCategory, setActiveCategory] = useState("");
//   const [categorias, setCategorias] = useState(todasCategorias);

//   const filterItems = (categoria) => {
//     setActiveCategory(categoria);
//     if (categoria === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === categoria);
//     setMenuItems(newItems);
//   };
//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <img src={logo} alt="logo" className="logo" />
//           <h2>Menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categorias
//           categorias={categorias}
//           activeCategory={activeCategory}
//           filterItems={filterItems}
//         />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// };

// export default AppMenu;
