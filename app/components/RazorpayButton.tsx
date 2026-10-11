"use client";

import { useEffect, useRef, useState } from "react";

// Shows a Razorpay "Payment Button" (created in the Razorpay dashboard under
// Payment Button). Razorpay's script draws the button itself, so we only add
// the script tag to the page with your button ID.
//
// Some phone browsers and ad blockers block Razorpay's script. If the button
// hasn't appeared after a few seconds, we show our own "Pay now" link instead,
// which opens Razorpay's payment page for the same button in a new tab.
export default function RazorpayButton({ buttonId }: { buttonId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form || !buttonId) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", buttonId);
    script.async = true;
    script.onerror = () => setShowFallback(true);
    form.appendChild(script);

    // Razorpay adds an element with this class once its button is drawn
    const timer = setTimeout(() => {
      if (!form.querySelector(".razorpay-payment-button")) setShowFallback(true);
    }, 4000);

    // Remove the button again if this part of the page goes away
    return () => {
      clearTimeout(timer);
      form.innerHTML = "";
    };
  }, [buttonId]);

  return (
    <>
      <form ref={formRef} className="flex justify-center" hidden={showFallback} />
      {showFallback && (
        <a
          href={`https://pages.razorpay.com/${buttonId}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#173F73] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Pay now
        </a>
      )}
    </>
  );
}
