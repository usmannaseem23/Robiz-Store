"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";

const FaqsQuick = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of questions
  const questions = [
    "What is the return policy of Robiz Clothing?",
    "How long does shipping take?",
    "Can I cancel or change my order?",
    "How do I track my order?",
    "What forms of payment does Robiz Clothing accept?",
  ];

  // Array of answers corresponding to the questions
  const answers = [
    "We accept returns within 30 days of delivery. Items must be in their original condition with tags attached. Please see our full return policy for details.",
    "Shipping times vary depending on your location. We offer standard shipping (3-7 business days), expedited shipping (2-3 business days), and express shipping (1-2 business days).",
    "Please contact our customer service team as soon as possible if you need to cancel or make changes to your order. We will do our best to accommodate your request, but please note that we may not be able to make changes once an order has shipped.",
    "Once your order ships, you will receive an email with tracking information. You can use this to track the status of your order on the shipping carrier's website.",
    "We accept major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal and Apple Pay.",
  ];

  return (
    <div>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="text-center mb-10">
              <h1 className="text-myBlackHead scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Frequently Asked Questions
              </h1>
              <div className="flex mt-2 justify-center">
                <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
              </div>
            </div>
            <p className="mt-4 max-w-xl text-base scroll-m-20 tracking-tight leading-relaxed text-myBlackPara lg:mx-auto">
              At Robiz Clothing, we want to make sure you have a seamless
              shopping experience. Below, we&apos;ve answered some of our most
              commonly asked questions.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {questions.map((question, index) => (
              <div
                key={index}
                className="cursor-pointer  group rounded-3xl border lg:hover:bg-myBlackPara/80  shadow-lg transition-all duration-200 hover:duration-300"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex text-lg font-semibold text-myBlackHead lg:group-hover:text-myWhite">
                    {question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-myBlackHead lg:group-hover:text-myWhite" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-myBlackHead lg:group-hover:text-myWhite" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-myBlackPara lg:group-hover:text-myWhite">{answers[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-myBlackPara">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link
              href={"/contact"}
              className="font-semibold text-myBlackHead hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FaqsQuick;
