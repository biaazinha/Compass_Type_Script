//const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
//} = {
//    name: 'bia',
//    age: 20,
//    hobbies: ['Sports', 'Cooking'],
//    role: [2, 'author']
//};

// const ADMIN = 0;
// const READY_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READY_ONLY, AUTHOR };

const person = {
    name: 'bia',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteSctivities: string[];
favoriteSctivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}