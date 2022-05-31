// categories is the main data structure for the app; it looks like this:
const width = 6;
const height = 4;
let board = [];
//let categories = [];

function makeBoard() {
    for (let y = 0; y < height; y++) {
      board.push(Array.from({ length: width }));
    }
  }

function makeHtmlBoard(categories) {
   
    const board = document.querySelector('#board');
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
  
    for (let category of categories) {
      const headCell = document.createElement('td');
      headCell.innerText = category.title;
      headCell.style.textAlign = "center";
      headCell.style.fontSize = "25px";
      headCell.style.fontWeight = "bold";
      top.append(headCell);
    }
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < height; y++) {
      let row = document.createElement('tr');
      //row.setAttribute("type", "button");
      row.addEventListener("click", handleClick);
  
      for (let x = 0; x < width; x++) {
        let cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        //cell.addEventListener("click", handleClick);
        cell.innerText = "?";
        cell.style.textAlign = "center";
        cell.style.fontSize = "50px";
        row.append(cell);
      }
  
      board.append(row);
    }
    
  }

function handleClick(evt) {
    if (evt.target.innerText === "?") {
        return evt.target.innerText = "halp"
    }
    else {
        alert("You've already done this question");
    }
}

async function getCategories() {
    const res = await axios.get('http://jservice.io/api/categories?count=6');
    makeHtmlBoard(res.data);
    }


makeBoard();
//makeHtmlBoard();
getCategories()
//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]



/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */



/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
