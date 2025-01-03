"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/app/store/hooks"; // Adjust the path based on your project structure
import { clearCart } from "@/app/store/features/cart"; // Ad

export default function PaymentForm() {
  const [totalAmount, setTotalAmount] = useState<number>(0); // Initial value
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useAppDispatch(); 

  // Access query params using window.location
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const total = urlParams.get("total");
      if (total) {
        setTotalAmount(parseFloat(total)); // Set totalAmount from query parameter
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearCart());

    // Display success message
    setSuccessMessage("Payment is successful!");

    // Clear the form fields
    setName("");
    setEmail("");
    setPaymentMethod("");
    setCardNumber("");
    setCvv("");
    setMessage("");
    setTotalAmount(0);

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
      // Optional: Redirect to a success page
      // window.location.href = "/payment-success"; // Uncomment if needed
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <div className=" flex justify-center items-center">

      <div className="bg-myBlackHead/5 p-5 rounded-xl w-full max-w-2xl shadow-lg">
      <div className="text-center mt-10 mb-10    ">
        <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
          <strong>Bill Payment</strong>
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
        </div>
      </div>

      <div className="max-w-lg mx-auto p-8 mb-10">
        {successMessage && (
          <div className="mb-6 text-center text-2xl font-semibold text-green-600">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block mb-2 text-sm font-medium text-myverydarkpink">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-myverydarkpink border-myverydarkpink focus:border-myverydarkpink"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <label className="block mb-2 text-sm font-medium text-myverydarkpink">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 mb-4 rounded border text-myverydarkpink border-myverydarkpink focus:border-myverydarkpink"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm font-medium text-myverydarkpink">
            Total Payment
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-myverydarkpink border-myverydarkpink focus:border-myverydarkpink"
            value={totalAmount > 0 ? `$${totalAmount}` : ""}
            readOnly={totalAmount > 0} // Editable only when resetting
            onChange={(e) => setTotalAmount(parseFloat(e.target.value) || 0)} // Ensure manual updates are allowed
          />

          {/* Payment Method */}
          <label className="block mb-2 text-sm font-medium text-black">
            Payment Method
          </label>
          <select
            className="w-full p-2 mb-4 rounded border border-myveryblack focus:border-myveryblack text-myverydarkblack"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option className="bg-black text-white" value="" disabled>
              Select Payment Method
            </option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
          </select>

          {/* Card Number */}
          <label className="block mb-2 text-sm font-medium text-myverydarkblack">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-myverydarkblack border-myverydarkblack focus:border-myverydarkblack"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          {/* CVV */}
          <label className="block mb-2 text-sm font-medium text-myverydarkblack">
            CVV
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-myverydarkblack border-myverydarkblack focus:border-myverydarkblack"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />

          {/* Message */}
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-myverydarkblack"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded border border-myverydarkblack focus:border-myverydarkblack text-myverydarkblack h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-myWhite bg-myBlackHead border-0 py-2 px-6 hover:bg-myBlackHead/80 rounded text-lg"
          >
            Submit Payment
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}
