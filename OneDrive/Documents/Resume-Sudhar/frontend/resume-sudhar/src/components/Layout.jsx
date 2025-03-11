// import React, { useState } from "react";
// import { Menu, MenuItem, ProductItem, HoveredLink } from "./MenuComponents.jsx";

// const Layout = () => {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">React Navigation Menu</h1>

//       {/* Menu Component */}
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="grid grid-cols-2 gap-4 p-4">
//             <ProductItem
//               title="Product 1"
//               description="This is Product 1."
//               href="/products"
//               src="https://via.placeholder.com/140x70"
//             />
//             <ProductItem
//               title="Product 2"
//               description="This is Product 2."
//               href="/products"
//               src="https://via.placeholder.com/140x70"
//             />
//           </div>
//         </MenuItem>

//         <MenuItem setActive={setActive} active={active} item="About Us">
//           <div className="p-4">
//             <HoveredLink href="/about">Our Team</HoveredLink>
//           </div>
//         </MenuItem>

//         <MenuItem setActive={setActive} active={active} item="Contact">
//           <div className="p-4">
//             <HoveredLink href="/contact">Email Us</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./MenuComponents.jsx";

const Layout = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ✅ Navbar at the Top */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center z-10">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="grid grid-cols-2 gap-4 p-4">
              <ProductItem title="Product 1" description="This is Product 1." href="/products" src="https://via.placeholder.com/140x70" />
              <ProductItem title="Product 2" description="This is Product 2." href="/products" src="https://via.placeholder.com/140x70" />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="p-4">
              <HoveredLink href="/about">Our Team</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="p-4">
              <HoveredLink href="/contact">Email Us</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </nav>

      {/* ✅ Push Content Down to Prevent Overlap */}
      <div className="pt-20 p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Content Will Be Rendered Here */}
      </div>
    </>
  );
};

export default Layout;

