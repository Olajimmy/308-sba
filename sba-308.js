// The provided course information.
const CourseInfo = {
    id: 451,
    name: "fluency in DOM",
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50,
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150,
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500,
        },
    ],
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47,
        },
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150,
        },
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400,
        },
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39,
        },
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140,
        },
    },
];


  
  // Using Set and map
  const uniqueValues = [
    ...new Set(LearnerSubmissions.map((item) => item.learner_id)),
  ].map((id) => LearnerSubmissions.find((item) => item.learner_id === id));
  
 //console.log('unique ids')
  console.log(uniqueValues.length, "Unique IDs")

  //get the scores
  //if the unique id  == learners id ? print all scores pertaining to that id in all the object.
  for(i=0; i<uniqueValues.length; i++){//ID
    //console.log('unique ids with score below');
    console.log("ID = ", uniqueValues[i].learner_id);

    //getting the score data
    console.log('learner score with respective ID')
    for (j = 0; j < LearnerSubmissions.length; j++){
  if(uniqueValues[i].learner_id == LearnerSubmissions[j].learner_id){
   console.log("these are the scores to this unique IDs", LearnerSubmissions[j].submission.score)
  

//begin import loops

for(k=0; k< AssignmentGroup.assignments.length; k++){
    for (p=0; p< LearnerSubmissions.length; p++){
if (AssignmentGroup.assignments[k].id == LearnerSubmissions[p].assignment_id){
//from here
    if(AssignmentGroup.assignments[k].due_at< LearnerSubmissions[p].submission.submitted_at){
        lessMark = ((LearnerSubmissions[p].submission.score / AssignmentGroup.assignments[k].points_possible)/100*10);
        console.log("submitted late Actual score percentage", lessMark)
        lessMarkFinal = lessMark * 9;
        console.log("lost 10 percent due to late submission",lessMarkFinal)
    
    }
    if(AssignmentGroup.assignments[k].due_at >= LearnerSubmissions[p].submission.submitted_at){
      
       // console.log("should be marked and awarded mark")
// iterate  assignment length in and iterate learners submission in
//console.log("beginning of Assignment not yet due")
    console.log("score / points possible", LearnerSubmissions[p].submission.score / AssignmentGroup.assignments[k].points_possible)

        
//Accounting for potential errors
    }else if(LearnerSubmissions[p].submission.score == 0 || ""){
        console.log("you cannot divide by Zero or a String")
    }//end inner if






//average
// for (u=0; u<LearnerSubmissions.length;u++){
//     average = LearnerSubmissions[u].submission.score
//    }
   
  // for (let i = 0; i < arr. length; i++) { sum += arr[i]; }

}// end outer if
    }//end of inner for loop
    //console.log('break btw unique IDs')

}//end for outter for loop
  }
}
    console.log('break btw unique IDs')

}
  








//console.log("*******scores division**********")

//date collection for manipulation
//console.log('date data')
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = yyyy + '-' + mm + '-' + dd;

//console.log(formattedToday)

//breaking down the date to be able to compare it properly
//assignment not yet due from here
let y = LearnerSubmissions[0].submission.submitted_at.split("-");

// end of date comparison test


//if an assignment group does not belong to its course 
try{
if(AssignmentGroup.course_id !== CourseInfo.id){
    console.log("invalid number")
}
} catch(error) {
    // Code to handle the error
    console.error("An error occurred:", error); 
  }//getting assignment due date and points_possible

//due dates
console.log("**********due dates************")

for (t = 0; t < AssignmentGroup.assignments.length; t++){
    console.log(AssignmentGroup.assignments[t].due_at)
   
}


 //points_possible
 console.log("**********points_possible************")
 for (y = 0; y < AssignmentGroup.assignments.length; y++){
    console.log(AssignmentGroup.assignments[y].points_possible)
}


  //let a = LearnerSubmissions.length;
  //console.log(a)

  
//firstLearner = (LearnerSubmissions[0].submission.score)
//secondLearner = (LearnerSubmissions[0].learner_id)
//console.log(firstLearner)
//function learnersID(){
/*
LearnerSubmissions.forEach(person => console.log(person.learner_id));
for (i = 0; i <5 ; i++){
    console.log(LearnerSubmissions[i])
   // let a = LearnerSubmissions[i];
    if (LearnerSubmissions[i].learner_id == LearnerSubmissions[i] && LearnerSubmissions){
        console.log('we have the same value')
    }


}

if (LearnerSubmissions.learner_id = LearnerSubmissions.learner_id){
     console.log('we have the same number')
}
  

LearnerSubmissions.forEach(person => console.log(person.assignment_id));
    //console.log(learnersScore)

*/

//learner
//average = LearnerSubmissions[0].submission

// function getLearnerData(course, ag, submissions){
//     co
//    console.log(JSON.stringify(result.map(a => a.name)))

// }return result
// getLearnerData()
/*
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0, // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833, // late: (140 - 15) / 150
        },
    ];

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);


console.log(result);
 */

for (u=0; u<LearnerSubmissions.length;u++){
    score_awarded = LearnerSubmissions[u].submission.score       
    console.log("score awarded for each submission " , score_awarded)
}

console.log("assignment not yet due")

for (r = 0; r < LearnerSubmissions.length; r++){
//console.log(y[0])
if(yyyy <= y[r]){
   // console.log("years is more than the due year")

   
}else if(mm < y[r]){
    //console.log("month is greater")

}else if(dd < y[r]){
   // console.log("date is also greater")
} else{
   // console.log('assignment not yet due')//end if

}
//end for
}

function getLearnerData(CourseInfo, AssignmentGroup, [learnerSubmission]){
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0, // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833, // late: (140 - 15) / 150
        },
    ];

} return getLearnerData

getLearnerData()


