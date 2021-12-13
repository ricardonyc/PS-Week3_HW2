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
    activity: "volleyball",
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
    activity: "football",
    gender: "female",
  },
  {
    name: "Youssouf",
    activity: "football",
    gender: "male",
  },
  {
    name: "Anthony",
    activity: "wrestling",
    gender: "male",
  },
  {
    name: "Stacey",
    activity: "basketball",
    gender: "male",
  },
  {
    name: "Sarah",
    activity: "soccer",
    gender: "female",
  },
  {
    name: "Dillon",
    activity: "cooking",
    gender: "male",
  },
  {
    name: "Patrick",
    activity: "volleyball",
    gender: "male",
  },
];

const filterActivity = () => {
  const input = document.getElementById("student-input").value;
  if (!input) {
    studentOutput.innerHTML = "Please enter an activity";
  } else {
    let filtered = students
      .filter((x) => (x.activity === input ? x.activity : false))
      .map((x) => `${x.name} enjoys ${x.activity}`)
      .join(", ");
    studentOutput.innerHTML = filtered;
  }
};
