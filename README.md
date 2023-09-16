# my-course-roster-mdhasanali39

### This is an online course platform. where anyone can buy the course of their choice and complete their course.

## let's discuss about 3 features of my website from many features

 ### #1 Select_Button
	In my platform, the courses are arranged in a card format and each card has a select button that the user clicks on.
	By clicking on which the user can add the course of his choice to the cart
 ### #2 Credit-Hour-limit
 	A course cannot be purchased more than once.
  	and the total hours for all courses must be a maximum of 20 hours
   	A post message will be sent when the maximum credit hour is exceeded, like: "You don't have enough credit"
### #3 One-course-once
	You can buy a course only once. the second time you click on the select button.
	you will get a toast message like : "this product already added"

---
# Let's Discuss how I managed the state in my assignment project.

in my project I have used 4 useState() for manage my state
### number-1
  ```
const [courses, setCourses] = useState([]);

here, I am setCourses() from in useEffect() fetching data.
then I pass 'courses' variable to the Card component.
then I using map method and create dynamic cards.
```
### number-2
```
const [selectedCourses, setSelectedCourses] = useState([]);

Here, I am managed the selected course by this useState()
If user clicked the Select button any of the card, the card will be set to the state as an array
And then I manage how show the card in cart using useState hook
```
### number-3
```
const [credit, setCredit] = useState(0);

How much the credit hour for all of the courses that are selected by user
are manage by this useState and for show the total credit hours in the cart.
```
### number-4
```
const [totalPrice, setTotalPrice] = useState(0);

Here, I am using this useState() hook for showing the Total Price for all of the Selected courses by user.
```
# Copyrighted by
-[Course Register](https://github.com/programming-hero-web-course2/my-course-roster-mdhasanali39)
  
