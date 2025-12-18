

use('College')


// insert One document using this query

    db.Students.insertOne({
        name:"Shailendra Kumar Pandey",
        age:30,
        email:"shailendrakr2010@gmail.com",
        mobile_no:9806638963
    })
 

//  using this command show the data base

        db.Students.find()

// insert many document single using this query


db.Students.insertMany([
  { rollNo: 1, name: "Amit Sharma", age: 20, course: "BCA", marks: 78 },
  { rollNo: 2, name: "Rahul Verma", age: 21, course: "BSc IT", marks: 82 },
  { rollNo: 3, name: "Neha Singh", age: 19, course: "BCA", marks: 88 },
  { rollNo: 4, name: "Pooja Patel", age: 22, course: "MBA", marks: 75 },
  { rollNo: 5, name: "Ravi Kumar", age: 20, course: "BTech", marks: 69 },
  { rollNo: 6, name: "Anjali Gupta", age: 21, course: "BCA", marks: 91 },
  { rollNo: 7, name: "Suresh Yadav", age: 23, course: "MBA", marks: 72 },
  { rollNo: 8, name: "Kiran Mishra", age: 19, course: "BSc CS", marks: 85 },
  { rollNo: 9, name: "Vikas Tiwari", age: 22, course: "BTech", marks: 77 },
  { rollNo: 10, name: "Sneha Jain", age: 20, course: "BCA", marks: 89 },
  { rollNo: 11, name: "Manish Rai", age: 21, course: "BSc IT", marks: 68 },
  { rollNo: 12, name: "Priya Khare", age: 22, course: "MBA", marks: 74 },
  { rollNo: 13, name: "Deepak Soni", age: 23, course: "BTech", marks: 81 },
  { rollNo: 14, name: "Ritika Joshi", age: 19, course: "BCA", marks: 92 },
  { rollNo: 15, name: "Nitin Malviya", age: 20, course: "BSc CS", marks: 66 },
  { rollNo: 16, name: "Kajal Saxena", age: 21, course: "BCA", marks: 84 },
  { rollNo: 17, name: "Arjun Thakur", age: 22, course: "BTech", marks: 73 },
  { rollNo: 18, name: "Renu Chauhan", age: 23, course: "MBA", marks: 79 },
  { rollNo: 19, name: "Mohit Agrawal", age: 20, course: "BSc IT", marks: 87 },
  { rollNo: 20, name: "Payal Dubey", age: 21, course: "BCA", marks: 90 },
  { rollNo: 21, name: "Ashish Pandey", age: 22, course: "BTech", marks: 71 },
  { rollNo: 22, name: "Shweta Nair", age: 19, course: "BSc CS", marks: 83 },
  { rollNo: 23, name: "Gaurav Mehta", age: 20, course: "BCA", marks: 76 },
  { rollNo: 24, name: "Sonam Kapoor", age: 21, course: "MBA", marks: 88 },
  { rollNo: 25, name: "Rohit Saxena", age: 22, course: "BTech", marks: 67 },
  { rollNo: 26, name: "Divya Arora", age: 23, course: "BCA", marks: 94 },
  { rollNo: 27, name: "Akash Bansal", age: 20, course: "BSc IT", marks: 70 },
  { rollNo: 28, name: "Nisha Khandelwal", age: 21, course: "BCA", marks: 86 },
  { rollNo: 29, name: "Sanjay Kulkarni", age: 22, course: "BTech", marks: 78 },
  { rollNo: 30, name: "Pallavi Deshmukh", age: 19, course: "BSc CS", marks: 82 },
  { rollNo: 31, name: "Rakesh Patel", age: 20, course: "MBA", marks: 69 },
  { rollNo: 32, name: "Komal Choudhary", age: 21, course: "BCA", marks: 91 },
  { rollNo: 33, name: "Hemant Rawat", age: 22, course: "BTech", marks: 75 },
  { rollNo: 34, name: "Anita Bisht", age: 23, course: "MBA", marks: 80 },
  { rollNo: 35, name: "Yogesh Pawar", age: 20, course: "BSc IT", marks: 73 },
  { rollNo: 36, name: "Meena Iyer", age: 21, course: "BCA", marks: 88 },
  { rollNo: 37, name: "Prakash Naik", age: 22, course: "BTech", marks: 77 },
  { rollNo: 38, name: "Rashmi Kulkarni", age: 19, course: "BSc CS", marks: 84 },
  { rollNo: 39, name: "Sunil Rathod", age: 20, course: "BCA", marks: 68 },
  { rollNo: 40, name: "Alka Shukla", age: 21, course: "MBA", marks: 92 },
  { rollNo: 41, name: "Naveen Chandra", age: 22, course: "BTech", marks: 79 },
  { rollNo: 42, name: "Bhavna Solanki", age: 23, course: "BCA", marks: 85 },
  { rollNo: 43, name: "Vivek Reddy", age: 20, course: "BSc IT", marks: 72 },
  { rollNo: 44, name: "Isha Malhotra", age: 21, course: "BCA", marks: 89 },
  { rollNo: 45, name: "Kunal Arvind", age: 22, course: "BTech", marks: 74 },
  { rollNo: 46, name: "Swati Ghosh", age: 19, course: "BSc CS", marks: 81 },
  { rollNo: 47, name: "Harsh Vardhan", age: 20, course: "MBA", marks: 66 },
  { rollNo: 48, name: "Pankaj Tripathi", age: 21, course: "BCA", marks: 87 },
  { rollNo: 49, name: "Aarti Sen", age: 22, course: "BSc IT", marks: 90 },
  { rollNo: 50, name: "Rohini Salvi", age: 23, course: "MBA", marks: 83 }
])



db.teachers.insertMany([
  {
    teacherId: 1,
    name: "Rajesh Sharma",
    age: 40,
    subject: "Mathematics",
    experience: 15,
    department: "Science"
  },
  {
    teacherId: 2,
    name: "Sunita Verma",
    age: 38,
    subject: "English",
    experience: 12,
    department: "Arts"
  },
  {
    teacherId: 3,
    name: "Amit Pandey",
    age: 35,
    subject: "Computer Science",
    experience: 10,
    department: "IT"
  },
  {
    teacherId: 4,
    name: "Neelam Singh",
    age: 42,
    subject: "Physics",
    experience: 18,
    department: "Science"
  },
  {
    teacherId: 5,
    name: "Vikram Patel",
    age: 37,
    subject: "Chemistry",
    experience: 11,
    department: "Science"
  },
  {
    teacherId: 6,
    name: "Pooja Jain",
    age: 34,
    subject: "Biology",
    experience: 9,
    department: "Science"
  },
  {
    teacherId: 7,
    name: "Sanjay Mehta",
    age: 45,
    subject: "Economics",
    experience: 20,
    department: "Commerce"
  },
  {
    teacherId: 8,
    name: "Ritu Khanna",
    age: 36,
    subject: "History",
    experience: 10,
    department: "Arts"
  },
  {
    teacherId: 9,
    name: "Anil Yadav",
    age: 39,
    subject: "Accountancy",
    experience: 14,
    department: "Commerce"
  },
  {
    teacherId: 10,
    name: "Kavita Mishra",
    age: 33,
    subject: "Hindi",
    experience: 8,
    department: "Arts"
  }
])


