import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import { Toaster } from "sonner";
import AppLayout from "./ui/AppLayout";
import About from "./ui/About";
import ProductDetails, {
  loader as productLoader,
} from "./features/products/ProductDetails";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import CreateOrder from "./features/order/CreareOrder";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import Login from "./features/login/Login";
import Favorites from "./features/favorites/Favorites";
import NotFound from "./ui/NotFound";
import Orders from "./features/order/Orders";
import store from "./store";
import { Provider } from "react-redux";
import Error from "./ui/Error";
import Loader from "./ui/Loader";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        hydrateFallbackElement: <Loader />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      // {
      //   path: "products/:filter",
      //   element: <ProductFilter />,
      //   loader: filterLoader,
      //   errorElement: <Error />,
      // },
      {
        path: "products/:productId",
        element: <ProductDetails />,
        hydrateFallbackElement: <Loader />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="top-left"
        toastOptions={{
          classNames: {
            toast:
              "!bg-[#f7f2ed] !text-[#33211e] !rounded-2xl !border !border-[#d8cbc2]",
          },
        }}
      />

      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
