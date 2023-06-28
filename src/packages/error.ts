export class WaabotError extends Error {
    statusCode = 400;
  
    constructor(message: string) {
      super(message);
  
      // 👇️ because we are extending a built-in class
      Object.setPrototypeOf(this, WaabotError.prototype);
    }
  
    getErrorMessage() {
      return 'Something went wrong: ' + this.message;
    }
  }
  
  