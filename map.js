const people = [

    {
        name : 'arnob',
        age : 23,
        position : 'Software Engineer',
    },
    {
        name : 'Puja',
        age : 22,
        position : 'Bcs Cader'
    } ,
    {
        name : 'Barsho',
        age : 17,
        position : 'Youtuber'
    }
]

const ages = people.map((person)=>{
    return person.age ;
})
console.log(ages)//return data
const newPeople = people.map((item)=>{
    return {
        firstName : item.name.toUpperCase(),
        old :  item.age
    }

})
console.log(newPeople); //get new object

const name = people.map((person)=>{
    return(
        person.name
    )
})
console.log(name);