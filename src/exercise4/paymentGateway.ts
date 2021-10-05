import PaymentDetails from "./paymentDetails";
import User from "./user";

export default interface PaymentGateway {
    processPayment(user: User, paymentDetails: PaymentDetails): boolean;
}