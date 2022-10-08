const DashboardRoutes = {
  LOGIN: "/login",
  INDEX: "/dashboard",
  PRODUCTS: "/dashboard/products",
  CATEGORIES: {
    INDEX:  "/dashboard/categories",
    CREATE:  "create",
    CATEGORY: ":identifier"
  },
};
export default DashboardRoutes;
