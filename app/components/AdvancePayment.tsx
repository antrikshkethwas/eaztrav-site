import { ADVANCE_AMOUNT, RAZORPAY_BUTTON_ID } from "../lib/booking";
import RazorpayButton from "./RazorpayButton";

// "Pay the advance" box shown under a booking form.
// Hidden while RAZORPAY_BUTTON_ID in lib/booking.ts is empty.
export default function AdvancePayment() {
  if (!RAZORPAY_BUTTON_ID) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">💳 Pay {ADVANCE_AMOUNT} advance</h2>
      <p className="text-sm text-gray-600 mt-1 mb-4">
        Booked on WhatsApp? Pay the {ADVANCE_AMOUNT} advance here to confirm your booking. UPI, card or net banking.
      </p>
      <RazorpayButton buttonId={RAZORPAY_BUTTON_ID} />
    </div>
  );
}
