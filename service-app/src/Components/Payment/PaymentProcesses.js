import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../Payment/SimpleCardForm";

const stripePromise = loadStripe("pk_test_51J3eicGjRaD5K97ynUdl6W70IIeiZF9qKOSB2wZcPjN247FTv6oQgl4VAcgYgmWOnj6SNaoJ71aM3ZXdjGdJQb1D0028qM8DRl");
const PaymentProcesses = ({id}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm id={id}></SimpleCardForm>
    </Elements>
    
  );
};

export default PaymentProcesses;
