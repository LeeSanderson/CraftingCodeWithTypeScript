import User from "./user";

export default interface UserValidator {
    isValid(user: User): boolean;
}
