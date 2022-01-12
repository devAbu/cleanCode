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
