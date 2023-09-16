import PropTypes from "prop-types";

function Card({ courses, handleSelectButtonClicked}) {
    // console.log(courses);
  return (
    <div className="w-full lg:w-3/4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        courses.map((course) => <div key={course.id} className="card bg-base-100 pt-4 rounded-xl">
          <figure>
            <img
              className="px-5"
              src={course.image}
              alt={course.courseName}
            />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title title-clr text-lg font-semibold">{course.courseName}</h2>
            <p className="description-clr text-[15px] font-semibold">{course.details}</p>
            <div className="flex justify-between">
                <p className=" flex gap-3">
                <img
                 src="/src/assets/icons/dollar-sign.png"
                /> 
                Price: {course.price}
                </p>
                <p className="text-right flex gap-3">
                <img src="/src/assets/icons/credit.png"
                /> 
                Credit: {course.credit}hr
                </p>
            </div>
            <div className="card-actions justify-center mt-6">
              <button
                onClick={()=>{handleSelectButtonClicked(course)}}
               className="btn btn-primary w-full bg-[#2F80ED] text-white border-none font-semibold">Select</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}
Card.propTypes = {
  courses: PropTypes.array.isRequired,
  handleSelectButtonClicked: PropTypes.func.isRequired,
};
export default Card;
