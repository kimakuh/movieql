export const people = [{
    id: "0",
    name: "Garam Kim",
    age: 18,
    gender: "female"
},
{
    id: "1",
    name: "aaaa",
    age: 8,
    gender: "female"
}, {
    id: "2",
    name: "bbbb",
    age: 22,
    gender: "male"
}, {
    id: "3",
    name: "cccc",
    age: 33,
    gender: "male"
}, {
    id: "4",
    name: "dddd",
    age: 55,
    gender: "female"
}, {
    id: "5",
    name: "eeee",
    age: 66,
    gender: "female"
}
];


// id가 people 배열 안에 있는 모든 Object들을 확인 후 해당 ID와 일치하는 대상을 리턴
export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id);
    return filteredPeople[0];
}