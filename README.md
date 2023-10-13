# Catch_me-_if_You_Can

Hosting Link: https://trishadas13.github.io/Catch_me-_if_You_Can/
<hr>
<h2> 🟡 HTML code description 🟡 </h2>
1.	A hidden h1 element with the class "hidden" initially displays a message "Time Out !!! Refresh the page to try your Luck again !!! 😏." It's hidden using CSS, but it suggests that if something goes wrong, the user should refresh the page to try again.

2.	Inside a form element, there is a login form with the following components:

  •	An h1 element with the text "Try to Log In," serving as the form's title.
  
  •	Two label elements followed by corresponding input fields:
  
  •	The first label is for entering the email with the text "Enter Your Mail ID." It's followed by an input element of type "email" used for entering the email address.
  
  •	The second label is for entering the password with no specific label text. It's followed by an input element of type "password" used for entering the password.
  
  •	A button element is used to submit the form. It contains a span element with the text "Log in."
      
<hr>
<h2> 🟡 CSS code description 🟡 </h2>
 •	The body element is set to a height of 100vh (100% of the viewport height) and is centered using display: flex; justify-content: center; align-items: center;. The background image is specified using background-image with center positioning and cover size.

•	The font-family is set to 'AR One Sans' for the entire document, which will apply this font to all text.

•	The form element is styled to have a width of 500px, a display of flex with a column layout, and some padding and spacing inside. It's aligned to the center using text-align: center. The background is set to transparent.

•	The button element is styled with a background color of #0095ff, a border, border-radius, box-shadow, and text color, giving it a blue appearance. The cursor is set to a pointer.
It's positioned absolutely to be 70% from the top and 46% from the right. When hovered, it scales up slightly for an interactive effect.

•	input elements are styled with padding, no outline, a border, font size, border radius, background color, and text color.

•	label elements have a font size, text color, and a subtle text shadow.

•	h1 elements are styled with a specific text color, underline decoration, and a text shadow.

•	The .hidden class is defined but set to display: none, meaning elements with this class will be initially hidden.
    
<hr>
<h2> 🟡 JavaScript code description 🟡 </h2>
1.	It selects various elements on the web page and stores them in variables:

•	btn: Represents a button element.

•	logIn: Represents a span element inside the button.

•	form: Represents a form element.

•	heading: Represents an element with the class "hidden."

2.	It defines a random function that generates a random number within a specified range.
	
3.	It adds an event listener to the button (btn) for the "mouseover" event.
	
4.	Inside the "mouseover" event listener for the button, it calculates the height and width of the button and the dimensions of the screen's viewport.
	
5.	It calculates the maximum allowable position for the button based on the screen's dimensions and button size.
	
6.	It sets the button's position to random coordinates within the calculated limits using btn.style.right and btn.style.top. It also adds a transition effect to make the movement smoother.
	
7.	After a delay of 5 seconds (5000 milliseconds), it changes the text of the logIn span to "Catch me if you can."
	
8.	It adds another "mouseover" event listener to the logIn span. When the user hovers over it, the text changes to "Come on... Click me."
	
9.	After a timeout of 20 seconds (20000 milliseconds), it hides the form element and displays the element with the class "hidden."
<hr>
<h2> 🟡 Summary 🟡 </h2>
In summary, this code is designed for creating a styled form with input fields and a button. The styles are applied for various elements in the form, giving it a cohesive and visually appealing look, including text shadows, text colors, and hover effects. The form is centered on the page, and there's a background image. Elements with the .hidden class are initially hidden but can be shown dynamically through JavaScript or other means.

This code creates an interactive button that moves randomly around the screen when hovered over, changes its message, and ultimately hides a form element while displaying a hidden element after a certain period of time. It adds an element of fun and surprise to the web page.
<hr>
<h2> 🟡 UI 🟡 </h2>
