var items:undefined =undefined;
console.log(items);

var userName1:undefined|string = undefined;
var val = null;
userName1 = "Awais";
console.log(val == userName1);



// Interface define karte hain
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // optional property
}

// Function jo user create karega
function createUser(user: User): string {
  return `User ${user.name} with email ${user.email} created successfully!`;
}

// Ek user object
const newUser: User = {
  id: 1,
  name: "Muhammad Asif Ansari",
  email: "muhammadasifansari101@gmail.com",
  isAdmin: true
};

// Function call
console.log(createUser(newUser));

// TypeScript Example

// Interface define karte hain
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // optional property
}

// Function jo user create karega
function createUser(user: User): string {
  return `User ${user.name} with email ${user.email} created successfully!`;
}

// Ek user object
const newUser: User = {
  id: 1,
  name: "Muhammad Asif Ansari",
  email: "muhammadasifansari101@gmail.com",
  isAdmin: true
};

// Function call
console.log(createUser(newUser));


