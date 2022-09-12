const DashboardRoutes = {
  LOGIN: "/login",
  INDEX: "/dashboard",
  PRODUCTS: "/dashboard/products",
  CATEGORIES: {
    INDEX:  "/dashboard/categories",
    CREATE:  "/dashboard/categories/create",
    CATEGORY: "/dashboard/categories/:identifier"
  },
};
export default DashboardRoutes;
