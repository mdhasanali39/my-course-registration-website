import Card from "../card/card";
import Cart from "../cart/Cart";
import "../home/Home.css";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleSelectButtonClicked = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit;
    if (isExist || count > 20) {
      return toast.success('This course is already added in your cart', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit;
      });
      if (count > 20) {
        return toast.success("You don't have enough credit hour", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } else {
        setCredit(count);
      }
      setSelectedCourses([...selectedCourses, course]);
      setTotalPrice(totalPrice + course.price);
    }
  };
  console.log(credit);

  return (
    <div className="flex gap-6 flex-col lg:flex-row mb-16">
      <ToastContainer/>
      <Card
        courses={courses}
        handleSelectButtonClicked={handleSelectButtonClicked}
      ></Card>
      <Cart
        selectedCourses={selectedCourses}
        credit={credit}
        totalPrice={totalPrice}
      ></Cart>
    </div>
  );
}
export default Home;
