// try...catch(err.name, err.message, err.stack)
try {
  throw new Error("new error!!");
} catch (error) {
  console.log(error.stack);
} finally {
  console.log("Finally will always run");
}

// Custom Errors
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}
try {
  throw new MyError("my error");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
