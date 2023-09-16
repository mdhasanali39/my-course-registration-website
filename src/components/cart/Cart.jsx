import PropTypes from 'prop-types';

function Cart({selectedCourses, credit, totalPrice}) {

    const initialCreditHour = 20;

    return (
        <div className='w-full lg:w-1/4 h-full bg-white p-4 rounded-xl'>
            <h2 className='mb-4 text-[#2F80ED] text-lg font-semibold'>Credit Hour Remaining {initialCreditHour - credit} hr</h2>
            <hr/>
            <div>
                <h2 className='title-clr text-xl mt-4 font-bold'>Course Name</h2>
                <ol className='list-inside my-5'>
                {
                    selectedCourses.map((course, i) => <li key={course.id} className='text-base description-clr'>{i +1} {course.courseName}</li>)
                }
                </ol>
            </div>
            <hr/>
            <p className='my-4 text-base description-clr font-medium'>Total Credit Hour : {credit}
            </p>
            <hr/>
            <p className='text-base description-clr font-semibold mt-4'>Total Price : $ {totalPrice}</p>
        </div>
    );
}
Cart.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,

};
export default Cart;