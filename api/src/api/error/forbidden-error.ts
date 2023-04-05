export class ForbiddenError extends Error {
    internal: Error;
    
    constructor(message: string, internal: Error) {
      super(message);
      this.internal = internal;
      Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}