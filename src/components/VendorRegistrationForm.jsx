import React, { useState } from "react";

const VendorRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-2xs mt-8 text-slate-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-emerald-900">Vendor <span className="text-emerald-500 font-semibold">Registration</span></h2>
      {submitted ? (
        <div className="text-green-600 font-semibold text-center">Thank you for registering! We will contact you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border px-3 py-2 rounded text-slate-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
              className="w-full border px-3 py-2 rounded text-slate-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-700">Business Name</label>
            <input
              type="text"
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Your business name"
              required
              className="w-full border px-3 py-2 rounded text-slate-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+2348000000000"
              required
              className="w-full border px-3 py-2 rounded text-slate-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Tell us about your business and the products you offer"
              required
              className="w-full border px-3 py-2 rounded text-slate-500"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-amber-400 transition"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default VendorRegistrationForm;
