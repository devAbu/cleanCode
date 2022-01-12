function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email,
    password,
  };

  db.insert("users", user);
}

saveUser("test@test.com", "123456");

// better
function saveUser(user) {
  db.insert("users", user);
}

saveUser(newUser);

// even better
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    db.insert("users", this);
  }
}

const user = new User("test@test.com", "123456");
user.save();

// example2 - with no params
let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;
}

toggleLoginStatus();

// One parameter
function log(message) {
  console.log(message);
}

log("Hi");

// there is no need
class Message {
  constructor(text) {
    this.text = text;
  }

  log() {
    console.log(this.text);
  }
}

const message = new Message("Hello");
message.log();

// more examples
function square(number) {
  return number * number;
}

const result = square(3);

function emailIsValid(email) {
  return email.includes("@");
}

const isValid = emailIsValid("test@test.com");

// TWO PARAMS

// example 1 - okay
function login(email, password) {
  // do something
}

login("test@test.com", "123456");

// example 2 - not okay
function log2(message, isError) {
  isError ? console.error(message) : console.log(message);
}

log("Hi there!", false);

// example 2 - better
function log(message) {
  console.log(message);
}

function logError(message) {
  console.error(message);
}

log("Hi there!");
logError("Something went wrong!");

// too many params
// example 1
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User("John", 30, "test@test.com");

// example 1 - better
class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

const user = new User({ name: "John", age: 30, email: "test@test.com" });

//example 2
function compare(a, b, comparator) {
  if (comparator == "equal") {
    return a === b;
  } else if (comparator == "not equal") {
    return a !== b;
  } else if (comparator == "greater") {
    return a > b;
  } else if (comparator == "less") {
    return a < b;
  }
}

const isSmaller = compare(3, 5, "smaller");
const isEqual = compare(3, 5, "equal");

// example 2 - better
function compare(comparisonData) {
  const { first, second, comparator } = comparisonData;

  if (comparator == "equal") {
    return first === second;
  } else if (comparator == "not equal") {
    return first !== second;
  } else if (comparator == "greater") {
    return first > second;
  } else if (comparator == "less") {
    return first < second;
  }
}

const isSmaller = compare({ first: 3, second: 5, comparator: "smaller" });
const isEqual = compare({ first: 3, second: 5, comparator: "equal" });

// Dynamic number of params
// okay
function sumUp(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

const total = sumUp(10, 19, -3, 22, 5, 100);
//const total = sumUp([10, 19, -3, 22, 5, 100]);

// TRY TO AVOID OUTPUT ARGUMENTS - especially if they are unexpected
function createId(user) {
  // addId - better
  user.id = "u1"; // output
}

const user = { name: "Max" };
createId(user);

console.log(user);

// object-oriented - user.addId()
class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = "u1";
  }
}

const customer = new User("Abu");
customer.addId();

console.log(customer);
