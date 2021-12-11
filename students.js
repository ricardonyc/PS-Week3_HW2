// 3. Create an array of at least five Student objects with the following properties: name, activity, gender

// - Filter all those students who are into swimming

// - Filter all those students who are in the activity entered by the user. For example, if the user enters "Basketball" display only students with basketball as their activity

const studentOutput = document.getElementById("student-output");

const students = [
  {
    name: "Steve",
    activity: "swimming",
    gender: "male",
  },
  {
    name: "Jessica",
    activity: "archery",
    gender: "female",
  },
  { name: "Edward", activity: "swimming", gender: "male" },
  {
    name: "Molly",
    activity: "soccer",
    gender: "female",
  },
  {
    name: "Julie",
    activity: "swimming",
    gender: "female",
  },
];

//

const filterActivity = () => {
  const input = document.getElementById("student-input").value;
  // let filtered = students.filter(x => x.activity === 'swimming' ? studentOutput.innerHTML = `${x.name} enjoys swimming!` : false)
  let filtered = students.filter((x) => {
    if (!input) {
      studentOutput.innerHTML = `Please enter something :(`;
    } else if (x.activity === input){
        studentOutput.innerHTML = `${x.name} enjoys ${x.activity}!`
    } else {
        studentOutput.innerHTML = `Nothing found :/`
    }
  });
  // studentOutput.innerHTML = filtered
};

// function filter(arr) {
//   let x = students.filter(x => x.activity === 'swimming' ? console.log(`${x.name} enjoys swimming!`) : false)
// }

// console.log(filter(students));
