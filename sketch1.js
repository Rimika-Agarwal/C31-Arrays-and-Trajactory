//string data
var student_name = "Tara";
console.log(student_name)

//number
var age = 14.3;
console.log(age);

//boolean
var shopping = true;
console.log(shopping);

//undefined
var score;
console.log(score);

//null
var score = null;
console.log(score);

//arrays - data structure
//denoted by [ ]
//index number: value
//0: "Rimika"
//1: "Tara"
var student_name1 = ["Rimika", "Yash", "Tara"];
console.log(student_name1);
console.log(student_name1.length);

//push values inside the array
student_name1.push("Shahrukh");


for(var i=0;i<student_name1.length;i=i + 2){ //i++ OR i += 1 OR i = i + 1
    console.log(student_name1[i]);
}

//pop values - delete
//student_name1.pop();
//console.log(student_name1[0]);


//list of arrays inside an array
var position = [230,120];
console.log(position)
var trajectory = [];
trajectory.push(position);
console.log(trajectory);

position = [100,100];
trajectory.push(position);

position = [3000,300];
trajectory.push(position);

for(var i = 0; i< trajectory.length;i++){
    console.log(trajectory[i][0],trajectory[i][1])
}



