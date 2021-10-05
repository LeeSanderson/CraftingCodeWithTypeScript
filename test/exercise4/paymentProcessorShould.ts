import { suite, test } from "@testdeck/mocha";
import { 
    User,
    PaymentDetails,
    PaymentProcessor,
    UserValidator,
    PaymentGateway } from "../../src/exercise4";
import { assert, expect } from "chai";
import { Substitute, Arg} from "@fluffy-spoon/substitute";

const InvalidUser: User = new User("Invalid");
const ValidUser: User = new User("Valid")
const Payment: PaymentDetails = new PaymentDetails(100);

@suite class PaymentProcessorShould  {
    
    private userValidator = Substitute.for<UserValidator>();
    private paymentGateway = Substitute.for<PaymentGateway>();
    private paymentProcessor: PaymentProcessor;

    constructor() {
        this.paymentProcessor = new PaymentProcessor(this.userValidator, this.paymentGateway);
    }

    @test "throw an exception when user is invalid"() {
        this.userValidator.isValid(Arg.any()).returns(false);

        expect(() => this.paymentProcessor.processPayment(InvalidUser, Payment))
        .to
        .throw("Invalid user");
    }
    
    @test "not invoke the payment gateway when user is invalid"() {
        this.userValidator.isValid(Arg.any()).returns(false);

        expect(() => this.paymentProcessor.processPayment(InvalidUser, Payment))
        .to
        .throw("Invalid user");

        this.paymentGateway.didNotReceive().processPayment(Arg.any(), Arg.any());
    }

    @test "invoke payment gateway when user is invalid"() {
        this.userValidator.isValid(Arg.any()).returns(true);
        this.paymentProcessor.processPayment(ValidUser, Payment)
        this.paymentGateway.received().processPayment(ValidUser, Payment);
    }
}