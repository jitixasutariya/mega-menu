export const MenuItemData = [
  { title: "Home", path: "/home" },
  { title: "AboutUS", path: "/about-us" },
  {
    title: "Products",
    path: "/products",
    submenu: [
      { title: "HTML", path: "/products/html" },
      { title: "CSS", path: "/products/css" },
      { title: "JS", path: "/products/js" },
      {
        title: "React",
        submenu: [
          { title: "RactJs", path: "/products/react/reactjs" },
          { title: "NodeJs", path: "/products/react/nodejs" },
        ],
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    submenu: [
      { title: "Services1", path: "/services/services1" },
      { title: "Services2", path: "/services/services2" },
      { title: "Services3", path: "/services/services3" },
    ],
  },
];
