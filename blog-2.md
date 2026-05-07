GENERICS: THE TECHNIQUE TO REUSE CODES IN TYPESCRIPT.

INTRODUCTION:

We want to make our work smart, clean and easier.We want something that will do all things smartly and easily. So in typescript we use generics , a function the can work with different types of data like string, numbers or objects. It saves our time by allowing not writing seperate functions each time.
Generics helps us create reusable and flexible code without harming TypeScript's type safety.

USES OF GENERICS:

Generics use a type variable . We usually write it as <T>. The real type is decided when we use the function . T is just the placeholder for a type.

EXAMPLE:

Generics with objects.

type User ={
    name: string;
    age: number;
};

function getData<T>(data: T): T {
    return data;
}
 const user = getData<User>({
    name:"Miraz Hassan",
    age: 26,
 });

 here typescript understands that user has name and age.

BENEFITS OF GENERICS:

-Reusable code
-Better type safety
-clean code
-saves time
-Easier to maintain large projects

CONCLUSION:

Generics allow developers to write flexible and reusable code withot losing it's type safety . Instead of creating many fucntions we can create one generic function that works with different types . Generics are very important for creating clean and maintainable applications or projects.