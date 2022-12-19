// categories is the main data structure for the app; it looks like this:

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

let categories = [];
let idsArr = [];
const NUM_CATGS = 6;
const CLUES_PER_CATG = 5;
let RANDOM_CATG;


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
// creates arr of 6 category ids; idsArr, 
// selects a random category id form the arr, randomId,
// changes the value of RANDOM_CATG to randomId 
async function getCategoryIds() { 
    const ctgryQry = `https://jservice.io/api/categories?count=7`;
    const apiRes = await axios.get(ctgryQry);
    const data = apiRes.data;
    console.log('DATA ', data);
    const ids = data.filter((datas) => datas.id !== 3);
    console.log('IDS ', ids);
    categories = ids.map((x) => x.title);
    console.log('CATEGORIES ARR ', categories);
    // console.log('IDS ARRAY ', ids.map((x) => x.id));
    idsArr = ids.map((x) => x.id);
    console.log('IDS ARRAY ', idsArr);
    const randomIdSelector = Math.floor(Math.random() * idsArr.length);
    const randomId = idsArr[randomIdSelector];
    console.log('RANDOM ID ', randomId);
    return RANDOM_CATG = randomId; 
}

// test run, not included with file
getCategoryIds();

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
// this was not an async function when I downloaded from Exercise Brief
async function getCategory(catId) {
    const ctgryQryUrl = `https://jservice.io/api/category?id=${catId}`;
    const ctgryQry = await axios.get(ctgryQryUrl);
    console.log('CATEGORY QUERY FROM RANDOM ID ', ctgryQry.data);
    const ctgryTitle = ctgryQry.data.title;
    console.log('CATEGORY TITLE FROM RANDOM ID DATA ', ctgryTitle);
    const ctgryData = ctgryQry.data;
    console.log('CATEGORY DATA FROM RANDOM ID DATA ', ctgryQry.data);
    const ctgryClues = ctgryQry.data.clues;
    console.log('CATEGORY CLUES FROM RANDOM ID DATA ', ctgryClues);
    // return ctgryClues;
    console.log('CATEGORY ARRAY ', {ctgryClues, ctgryTitle});
    return [ctgryClues, ctgryTitle];  
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// did not originally have a paramter
async function fillTable(clueInfo) {
    console.log('CLUE OBJECT ', clueInfo);
    const clueData = clueInfo[0];
    console.log('clueData ', clueData);
    // console.log('CLUES ARR', clueData.map((x) => x.question));
    // const cluesArr = clueData.map((x) => x.question);
    // this loop with <thead><tr><th></th></tr></thead> creates one cell
    // the below creates 6 horizotal cells  
    for (let x = 0; x < 1; x++) {
        $('#jeopardy').append(`
        <thead>
            <tr>
                <th class="${idsArr[0]}" id="title1"></th>
                <th class="${idsArr[1]}" id="title2"></th>
                <th class="${idsArr[2]}" id="title3"></th>
                <th class="${idsArr[3]}" id="title4"></th>
                <th class="${idsArr[4]}" id="title5"></th>
                <th class="${idsArr[5]}" id="title6"></th>
            </tr>
        </thead>
        `)
        // this loop with <tbody><tr><td></td></tr></tbody> creates 5 vertical colums under the th above
        // we use the below code with the above code to make the entire board
        for (let y = 0; y < 5; y++) {
            // const i = clueData.map((x) => x.question)
            $('#jeopardy').append(`
                <tr>
                    <td class="${idsArr[0]}">?</td>
                    <td class="${idsArr[1]}">?</td>
                    <td class="${idsArr[2]}">?</td>
                    <td class="${idsArr[3]}">?</td>
                    <td class="${idsArr[4]}">?</td>
                    <td class="${idsArr[5]}">?</td>
                </tr>
            `)
        }
    }

    // console.log('REDUCE INFO ', clueData.reduce((accu, next) => next.question));
    $('#title1').text(categories[0]);
    $('#title2').text(categories[1]);
    $('#title3').text(categories[2]);
    $('#title4').text(categories[3]);
    $('#title5').text(categories[4]);
    $('#title6').text(categories[5]);
    }

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

async function handleClick(evt) {
    // console.log('$th ', evt.targte[$th]);
    // console.log(evt.target.parentElement[$th]);
    const clickId = evt.target.className;
    console.log('TARGET CLASS NAME ', evt.target.className);
    const clickIdUrl = `https://jservice.io/api/category?id=${clickId}`
    const clickIdQry = await axios.get(clickIdUrl);
    console.log('clickIdQry ', clickIdQry);
    const clickIdClues = clickIdQry.data.clues;
    console.log('clickIdClues ', clickIdClues);
    console.log('clickIdClue ', clickIdClues[0].question);
    $( this ).text('?') ? $( this ).text(clickIdClues[0].question) : $( this ).text(clickIdClues[0].answer)
    // if ($( this ).text('?')) {
    //     $( this ).text(clickIdClues[0].question);
    // } else {
    //     $( this ).text(clickIdClues[0].answer);
    // }     
}

$('#jeopardy').on('click', 'td', handleClick);

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
    const catId = await getCategoryIds();
    getCategory(catId);
    const clueInfo = await getCategory(catId) 
    fillTable(clueInfo);
}

// test run, not included with file
setupAndStart()
/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO