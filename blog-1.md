any VS unknown in TYPESCRIPT

INTRODUCTION:

The ultimate goal of typescript is to catch errors before compilation. In typescript we use two special types any and unknown. They look similar but work differently. 
-any removes type checking completely 
-unknown keeps code safe but you have to check the type first.

any TYPE:

Typescript don't check that variable when we use any . Example:

let data: any = "Miraz Hassan";
data.map((item: any) => item);

Here Typescript shown no error before compilation though strings dont support map() method.

PROBLEM OF USING any:

-No type safety
-errors are harder to find
-Typescript can't help properly.
This is why any is called a type safety hole.


unknown TYPE:

unknown is a safer version of any because typescript forces us to check the type first. Example:

let value: unknown = "Miraz Hassan";
// shows error
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
But now the code will work safely because we checked that value is a string.


TYPE NARROWING:

Type narrowing means checking a variable's type before using it. Like we use typeof, instanceof etc.

EXAMPLE:

let year: unknown =2021;
if (typeof age === "number") {
    console.log(year + 5);
}

Here typescript can understand that year is a number.

CONCLUSION:

-any don't check types and creates errors.
-unknown if safer because it forces first for type checking.
-type narrowing makes typescript code more relaible.