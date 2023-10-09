## Available Scripts

In the project directory, you can run:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

///
this program allows the user to enter 3 inputs (X, Y, Z) this numbers should be positives integers greater than 0, and by running some calculations the program returns a series of steps to obtain the target value "Z", this program also validates some cases where the inputs have wrong values components:

Table: displays a Table to render the results it shows the values presented next:
    {
        Small: 'referes to the smallest value beetween X,Y',
        Large: 'referes to the largest value beetween X,Y',
        Explanation: 'offers a detail about the procedure the program executed to get the result'
    }

PositiveIntegerInput: renders a text input 

Form: renders the main driver for the program where all the logic gets loaded and all the other components get rendered, it contains a button to "Solve" the problem and after the inputs get introduced by the user and click the button it executes the logic to generate the best path and renders it in the Table
