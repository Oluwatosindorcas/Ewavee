import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import data from "./constants/dummydata.json";

//styles
import "./App.css";

//pages
import Home from "./Home/Home";
import Blog from "./Blog/index";
import ViewStoryPage from "./Blog/components/viewstory/viewStoryPage";
import PostNews from "./Blog/postnews";

// Layout
import BlogLayout from "./Blog/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route
        path="/blog"
        element={
          <BlogLayout>
            <Blog />
          </BlogLayout>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <BlogLayout>
            <ViewStoryPage data={data} />
          </BlogLayout>
        }
      />
      <Route path="/postnews" element={<PostNews />} />
    </>
  )
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <div className="inner"></div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
