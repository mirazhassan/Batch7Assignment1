//problem 1

function filterEvenNumbers(numbers: number[]): number[] {
      let evenNumbers: number[] = [];
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
}


// problem 2

function reverseString(input: string): string {
    let reversed: string = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed =reversed + input[i];
    }
return reversed;
}


//problem 3

 type StringOrNumber = string | number;
 function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "The value is a string.";
    } else {
        return "The value is a number.";
    }
 }


//problem 4

function getProperty<T>(obj: T , key: keyof T){
    return obj[key];
}
const user = {
    id: 1,
    name: "miraz",  
    age: 26,
};
const result = getProperty(user, "name");



//problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true,
   };
}
const NBook: Book = {
    title: "Next Level AI-Driven Software Engineering",
    author: "Jhankar Mahbub",
    publishedYear: 2026,
};
const updatedBook = toggleReadStatus(NBook);


// problem 6

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }   
} 
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }   
        getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Miraz", 26, "A");
student.getDetails();


//problem 7

function getIntersection(arr1: number[], arr2: number[]) {

    let commonElements: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }
    return commonElements;
}
const outcome = getIntersection(
    [1,2,3,4,5,6],
    [3,4,5,7,8,9]
);