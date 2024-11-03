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
  console.log(uniqueValues.length)

  //get the scores
  //if the unique id  == learners id ? print all scores pertaining to that id in all the object.
  for(i=0; i<uniqueValues.length; i++){
    console.log('unique ids with score below');
    console.log(uniqueValues[i].learner_id);

    //getting the score data
    console.log('learner score with respective ID')
    for (j = 0; j < LearnerSubmissions.length; j++){
  if(uniqueValues[i].learner_id == LearnerSubmissions[j].learner_id){
   console.log(LearnerSubmissions[j].submission.score)
  }else{
    console.log('Empty!')
  }
    }//end of inner for loop
console.log('break btw unique IDs')
}// end of outer for loop


console.log("*******scores division**********")
for(k=0; k< AssignmentGroup.assignments.length; k++){
    for (p=0; p< LearnerSubmissions.length; p++){
if (AssignmentGroup.assignments[k].id == LearnerSubmissions[p].assignment_id){
    //console.log("true")
    if(AssignmentGroup.assignments[k].due_at >= LearnerSubmissions[p].submission.submitted_at){
        console.log("should be marked and awarded mark")
// iterate  assignment length in and iterate learners submission in
    console.log(LearnerSubmissions[p].submission.score / AssignmentGroup.assignments[k].points_possible)
    }else {
        console.log("this Assignment is not yet due")
    }//end inner if
}// end outer if
    }//end of inner for loop
}//end of outter for loop



//date collection for manipulation
console.log('date data')
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = yyyy + '-' + mm + '-' + dd;

console.log(formattedToday)

//breaking down the date to be able to compare it properly
let y = LearnerSubmissions[0].submission.submitted_at.split("-");
for (r = 0; r < LearnerSubmissions.length; r++){
console.log(y[0])
if(yyyy <= y[r]){
    console.log("years is more than the due year")

   
}else if(mm < y[r]){
    console.log("month is greater")

}else if(dd < y[r]){
    console.log("date is also greater")
} else{
    console.log('assignment not yet due')//end if

}
//end for
}
// end of date comparison test



//if an assignment group does not belong to its course 
if(AssignmentGroup.course_id !== CourseInfo.id){
    console.log("no such number")
}
//getting assignment due date and points_possible

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
//submission date validation
console.log("submission date validation")
//if ()

//console.log(AssignmentGroup.assignments[0].due_at)
//Assignment_length = AssignmentGroup.assignments.length;
//console.log(Assignment_length)



   //console.log(AssignmentGroup.course_id)
   //console.log(AssignmentGroup.assignments)






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

//learnersID()

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