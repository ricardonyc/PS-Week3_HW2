// 3. Create an array of at least five Student objects with the following properties: name, activity, gender

// - Filter all those students who are into swimming

// - Filter all those students who are in the activity entered by the user. For example, if the user enters "Basketball" display only students with basketball as their activity

const studentOutput = document.getElementById("student-output");

const students = [
  {
    name: "Steve",
    activity: "basketball",
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
    activity: "swimming",
    gender: "female",
  },
  {
    name: "Julie",
    activity: "bowling",
    gender: "female",
  },
];




const filterActivity = () => {
  const input = document.getElementById("student-input").value;
  if(!input){
    studentOutput.innerHTML = "Please enter an activity"
  }
  let filtered = students.filter(x => x.activity === input ? x.activity : false)
  studentOutput.innerHTML = JSON.stringify(filtered[0].name)
};


