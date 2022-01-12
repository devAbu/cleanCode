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

// too far away from the name
function createUser(email, password) {
  // low level
  if (!email || !email.includes("@") || !password || password.trim() !== "") {
    console.log("invalid input");
    return;
  }

  const user = {
    email: email,
    password: password,
  };

  // high level
  database.insert(user);
}
