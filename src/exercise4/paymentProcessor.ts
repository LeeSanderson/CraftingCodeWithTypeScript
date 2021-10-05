import PaymentDetails from "./paymentDetails";
import PaymentGateway from "./paymentGateway";
import User from "./user";
import UserValidator from "./userValidator";

export default class PaymentProcessor {
    constructor(
        private userValidator: UserValidator,
        private paymentGateway: PaymentGateway) {            
        }

	public processPayment(user: User, paymentDetails: PaymentDetails) {
		if (!this.userValidator.isValid(user)) {
            throw new Error("Invalid user");
        }

        this.paymentGateway.processPayment(user, paymentDetails);
	}
}

