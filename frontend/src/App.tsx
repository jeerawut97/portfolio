import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import HomePage from "./pages/Home.tsx";
import PortfolioPage from "./pages/Portfolio.tsx";
import PortfolioDetailPage from "./pages/PortfolioDetail.tsx";
import AboutUsPage from "./pages/AboutUs.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'portfolio', element: <PortfolioPage />},
      {path: 'portfolio/:portfolioId', element: <PortfolioDetailPage />},
      {path: 'about-us', element: <AboutUsPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
