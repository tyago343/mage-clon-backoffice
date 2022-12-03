const DashboardRoutes = {
  LOGIN: "/login",
  INDEX: "/dashboard",
  PRODUCTS: "/dashboard/products",
  CATEGORIES: {
    INDEX:  "categories",
    CREATE:  "create",
    CATEGORY: ":identifier"
  },
};
export default DashboardRoutes;
