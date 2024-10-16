import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  // loading screen
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // saving the data
      console.log(output);
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-bgDark2 flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
