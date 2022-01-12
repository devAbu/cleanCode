// high level
function emailIsValid(email) {
  return email.includes("@"); // low lever
}

// low level answer the question of high level

// mix
if (!email.includes("@")) {
  // low level
  console.log("Invalid email");
} else {
  const user = new User(email);
  user.save(); // high level
}

// better -- same level (high)
if (!isEmail(email)) {
  showError("Invalid email");
} else {
  saveNewUser(email);
}

// body

function handleCreateUserRequest(request) {
  try {
    createUser("test@test.com", "123456");
  } catch (err) {
    showError(err.message);
  }
}
// too far away from the name
function createUser(email, password) {
  validateInput(email, password);

  saveUser(email, password);
}

function validateInput(email, password) {
  if (inputIsNotValid) {
    /* showError("Invalid email or password");
    return; */
    throw new Error("Invalid email or password");
  }
}

function inputIsNotValid(email, password) {
  return !email || !email.includes("@") || !password || password.trim() === "";
}

function showError() {
  console.log(message);
}

function saveUser(email, password) {
  const user = {
    email: email,
    password: password,
  };

  database.insert(user);
}
