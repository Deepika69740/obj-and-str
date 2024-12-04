// 1. Create an object person with properties firstName, lastName, and age. Then:
var person={
    firstname:"Deepika",
    lastname:"Yannam",
    age:22,

}
console.log(person.firstname)
person.city="Newyork"
console.log(person)


// 2. Create an object product with properties name, price, and inStock. Then:
var product={
    name:"milk",
    price:20,
    instoke:"yes"
}
delete product.instoke
product.price=30
console.log(product)


// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
var library={
    name:"nhdtger",
    fantasy:{
        name:"fgrth",
        price:300,
    },
    mystary:{
        price:400
    }
}
library.scienceFiction={
    name:"degf",
    price:500
}
delete library.mystary
console.log(library.fantasy.name)
console.log(library)


// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
var user={
    username:"deepika",
    email:"deepikayannam6@gmail.com"
}
var address={
    city:"Kanigiri",
    state:"andhra",
    zip:523245
}
Object.freeze(user)
console.log(Object.isFrozen(user))
user.email="yannamdeepika"
user.phone=6309703757
console.log(user)

// 5.Create an object car with properties make, model, and price. Then:
var car={
    make:"done",
    model:"skoda",
    price:"15l"
}
Object.seal(car)
delete car.make
console.log(Object.isSealed(car))
console.log(car)


// sring methods


// 1. take two strings with spaces at starting of one string and at the ending of another string remove the spaces and concat the both string and convert the combined string into uppercase string
var str1="    deepika"
var str2="sai    "
var str3=str1.concat(str2)
str4=str3.trim().toUpperCase()
console.log(str4)

// 2.Extract Middle Portion of the string and get the last index of char of extracted string and Convert the portion to Lowercase
var d="deepika"
p=d.slice(2,5)
console.log(p)
console.log(d.charAt(6))


// 3.take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char 
var s="s"
var a="sai"
var e=s.concat(a)
console.log(e.toUpperCase())
console.log(e.slice(-2).charAt())

// 4.we have 2 string and extract first 3 chars of first string and extra last 3 chars of another string and concat those 2 results together and first char and last char of the resulted concatinated string should as uppercase
var d="deepika"
var s="sai"
var x=d.slice(0,3)
var y=s.slice(0,3)
var z=x.concat(y)
console.log(z)
console.log(z[0].toUpperCase())
console.log(z.slice(-1).toUpperCase())

// 5.You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last characters uppercase, extract a specific part of the string, concatenate it with another string
var m=prompt("eneter your sting")
var n=m.trim()
var o=n.slice(0,1).toUpperCase()
var p=n.slice(-1).toUpperCase()
var spec=n.slice(0,3)
var ne="yannam"                         
console.log(n)
console.log(o,p)
console.log(spec.concat(ne))
// 6."hello there , how are you " find the index of are word in the sentence
var str="hello there , how are you ";
var str1=str.split(" ")
console.log(str1.indexOf("are"))