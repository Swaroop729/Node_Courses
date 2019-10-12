//Todo Better watch the video 21 from Andrew from Udemy while seeing the arrow functions he explained greatly
//Todo read the blog which tells us the difference betwen anonymous fuctions and lambda functions https://medium.com/@chineketobenna/lambda-expressions-vs-anonymous-functions-in-javascript-3aa760c958ae
// todo read the anonymous functions in c# https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions
// todo read where to use the ES6 arrow(anonymous) functions and where not to https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/

// const square = function(x){
//     return x*x
// }
// const square = (x) => x*x
// const square = (x) =>{x*x}
// console.log(square(3))

/* Now look out for the differences between the arrow function */

// this function is working perfect now let us transform this into the arrow function as shown below
// const event ={
//     name:'Brithday Party',
//     GuestList : ['Swaroop','Arjun','Akira'],
//     PrintGuestList:function(){
//         console.log('This is my ',this.name)
//         console.log(this.GuestList)
//     }
// }

// const event ={
//     name:'Brithday Party',
//     GuestList : ['Swaroop','Arjun','Akira'],
//     PrintGuestList:()=>{
//         console.log('This is my ',this.name)
//         console.log(this.GuestList)
//         // here u can observe in the above list the name and guest list are not accessible with this
//     }
// }

// const event ={
//         name:'Brithday Party',
//         GuestList : ['Swaroop','Arjun','Akira'],
//         PrintGuestList(){
//             console.log('This is my ',this.name)
//             console.log(this.GuestList)
//             // here u can observe in the above list the name and guest list are not accessible with this
//         }
//     }
// now the normal above function has been worked
const event ={
    name:'Brithday Party',
    GuestList : ['Swaroop','Arjun','Akira'],
    PrintGuestList(){
        console.log('This is my ',this.name)
        this.GuestList.forEach((guest)=>{
            console.log(guest, 'has attended my ',this.name)
        })
    }
}
// The above function shows that the arrow functions take the Older scope

event.PrintGuestList()

