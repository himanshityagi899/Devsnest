// Ques1

const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student));

// Ques2

var student1 = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("Before deleting", student1);
delete student1.rollno;
console.log("After deleting", student1);

// Ques3

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var len = 0;
for (let key in student) {
  len++;
}
console.log(len);

// Ques4

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (const keys in library) {
  console.log(
    "Book Name:",
    library[keys].title,
    "  ",
    "Author:",
    library[keys].author,
    "  ",
    "Status:",
    library[keys].readingStatus
  );
  console.log("\n");
}

// Ques5

const cylinder = {
  radius: 12.2,
  height: 22.5,
  volume: function () {
    var x = 3.14 * this.radius * this.radius * this.height;
    console.log(x.toFixed(4));
  },
};
cylinder.volume();

// Ques6

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },

  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort((a, b) => (a.libraryID > b.libraryID ? -1 : 1));
for (let item in library) {
  console.log(
    library[item].title +
      " " +
      library[item].author +
      " " +
      library[item].libraryID
  );
}
