import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/storeContext";
import { FaLock, FaCreditCard, FaPaypal, FaApplePay } from "react-icons/fa";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation logic
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.street.trim())
      newErrors.street = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.match(/^\d{5}$/)) newErrors.zip = "Invalid ZIP code";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Invalid phone number";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Handle form submission here
    console.log("Submitting:", formData);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const totalAmount = getTotalCartAmount() + (getTotalCartAmount() ? 2 : 0);

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2 className="section-title">Delivery Information</h2>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleInputChange}
            className={errors.street ? "error" : ""}
          />
          {errors.street && (
            <span className="error-message">{errors.street}</span>
          )}
        </div>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className={errors.city ? "error" : ""}
            />
            {errors.city && (
              <span className="error-message">{errors.city}</span>
            )}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              className={errors.state ? "error" : ""}
            />
            {errors.state && (
              <span className="error-message">{errors.state}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleInputChange}
              className={errors.zip ? "error" : ""}
            />
            {errors.zip && <span className="error-message">{errors.zip}</span>}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              className={errors.country ? "error" : ""}
            />
            {errors.country && (
              <span className="error-message">{errors.country}</span>
            )}
          </div>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
      </div>

      <div className="place-order-right">
        <div className="order-summary">
          <h2 className="section-title">Order Summary</h2>

          <div className="summary-item">
            <span>Subtotal</span>
            <span>${getTotalCartAmount().toFixed(2)}</span>
          </div>

          <div className="summary-item">
            <span>Delivery Fee</span>
            <span>${getTotalCartAmount() ? "2.00" : "0.00"}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <button
                type="button"
                className={`payment-option ${
                  paymentMethod === "creditCard" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("creditCard")}
              >
                <FaCreditCard /> Credit Card
              </button>
              <button
                type="button"
                className={`payment-option ${
                  paymentMethod === "paypal" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <FaPaypal /> PayPal
              </button>
              <button
                type="button"
                className={`payment-option ${
                  paymentMethod === "applePay" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("applePay")}
              >
                <FaApplePay /> Apple Pay
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            <FaLock /> {isSubmitting ? "Processing..." : "Secure Checkout"}
          </button>

          <p className="security-note">
            Your payment information is encrypted and secure.
          </p>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
