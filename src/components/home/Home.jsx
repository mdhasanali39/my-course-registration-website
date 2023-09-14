import Card from "../card/card";
import Cart from "../cart/Cart";
import "../home/Home.css";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/public/course_data.json");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex gap-6 flex-col md:flex-row">
      <Card courses={courses}></Card>
      <Cart></Cart>
    </div>
  );
}
export default Home;
