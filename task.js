// function sendNotification(email) {
//     if(email.includes("@")!==true){
//         return "invalid email";
//     }
//     let emailAddress=email.split("@");
//     let userName=emailAddress[0];
//     let domainName=emailAddress[1];
//     let massage=userName+" "+"sent you an email from"+" "+domainName;
//     return massage;
    
// }
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

// let email="zihad@gmail.com"
// let main=email.split("@");
// console.log(main);

//     let userName=main[0];
//     let domainName=main[1];
//     let massage=userName+" "+"fkdjhfah"+" "+domainName;
//     console.log(massage);
// let names='foysal123';
// if(isNaN(names)){
    
// }

/*function signature/sample */
// function checkDigitsInName(name) {
//     //write your code here
//     if(typeof(name)!=="string"){
//         return 'invalid input'
//     }
//     else{
//         return 'valid input';
//     }
// }
// console.log(checkDigitsInName(["Raj"]));

function test(names){
    for(let i =0;i<names.length;i++){
        return (!isNaN(parseInt(names[i])));
    }
    
    // if (!isNaN(parseFloat(value)))
    
}
// console.log(test("@!&%"));
// console.log(test("foysal123"));

function hasNumbers(str) {
    for (let i = 0; i < str.length; i++) {
      // Use parseInt to attempt to convert each character
    //   if (!isNaN(parseInt(str[i]))) {
    //     return true; // Return true if a number is found
    //   }
    return (isNaN(parseInt(str[i])))
    }
    return false; // Return false if no number is found
  }
  
//   console.log(hasNumbers("foysal123")); // true
//   console.log(hasNumbers("foysal"));
//   console.log(hasNumbers("@$!"));

function checkDigits(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= '0' && str[i] <= '9') {
        return true;
      }
    }
    return false;
  }
  
//   const input = "Geeks for Geeks 123 numbers.";
  const input = "@%&";
//   console.log(checkDigits(input));

/*function signature/sample */
function checkDigitsInName(name) {
    //write your code here
    console.log(name);
    if(typeof name!=='string'){
        return "invalid input"
    }
    for(let i=0;i<name.length;i++){
        if(name[i]>='0' && name[i]<='9'){
            return true;
        }
    }
    return false;
}


// console.log(checkDigitsInName("kim123"))
// console.log(checkDigitsInName("kim"))
// console.log(checkDigitsInName("dim90vim"))
// console.log(checkDigitsInName(["dim90vim"]))

// problem-4
/*function signature/sample */
function checkEligibility(person) {
  // Check if types are correct
  if(typeof person !=="object"){
    return "Invalid Input";
  }
  if (typeof person.name === "string" &&
      typeof person.testScore === "number" && person.testScore <= 50 &&
      typeof person.schoolGrade === "number" && person.schoolGrade <= 30 &&
      typeof person.isFFamily === "boolean") {
      
    // Add 20 to the score if isFFamily is true (i.e., belongs to a farmer family)
    // let extraScore = person.isFFamily ? 20 : 0;
    if(person.isFFamily===true){
      person.isFFamily=20;
      let totalScore = person.testScore + person.schoolGrade + person.isFFamily;
      return totalScore >= 80;
    }
    
    // Calculate total score
    // let totalScore = person.testScore + person.schoolGrade + extraScore;
    
    // Check if total score is 80 or more
    // return totalScore >= 80;
  }
  //  else {
  //   // Return false if any type or condition is incorrect
  //   return false;
  // }
  if(person.isFFamily===false){
    person.isFFamily=0;
    let totalScore = (person.testScore + person.schoolGrade + person.isFFamily)< 80;
    return false
  }
}

// Example usage:
// let person = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true };
// let person = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true };
// let person = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false };
console.log(checkEligibility({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));  // Output: false
console.log(checkEligibility({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // Output: true
console.log(checkEligibility("hello" ));  // Output: invalid input


/*function signature/sample */
function calculateFinalScore(obj) {
  //write your code here
  if(typeof obj!=="object"){
    return "invalid input"
  }
  if(typeof obj.name==="string" && obj.testScore==="number" && obj.testScore<=50 && obj.schoolGrade==="number"&& obj.schoolGrade<=30 && obj.isFFamily==="boolean"){
    if(obj.isFFamily===true){
      obj.isFFamily=20;
     let totalScore=obj.testScore+obj.schoolGrade+obj.isFFamily;
      // return totalScore>=80;
      if(totalScore>=80){
        return true;
      }
    }
    if(obj.isFFamily===false){
      // obj.isFFamily=0;
      return false
    }
  }

  // let familyScore=obj.isFFamily?20:0
}
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore("hello" ));