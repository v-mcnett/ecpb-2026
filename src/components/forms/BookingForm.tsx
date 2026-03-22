'use client'

import { useState, useEffect } from 'react'

type Package = 'silver' | 'gold' | 'emerald'

interface FormData {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  package: Package
  venue: string
  notes: string
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    package: 'silver',
    venue: '',
    notes: ''
  })

  const handleSubmit = async (formData: React.FormEvent<HTMLFormElement>) => {
  const response = await fetch('/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  const result = await response.json();
  // Handle success/error
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // on page load, check if there's a package query param and set it in state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pkg = params.get('package') as Package
    if (pkg) {
      setFormData(prev => ({
        ...prev,
        package: pkg
      }))
    }
  }, []); 

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Full Name & Email */}
      <div className="grid md:grid-cols-[130px,1fr,130px,1fr] gap-x-4 gap-y-2 items-center">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <div className="form-control">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <div className="form-control">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      {/* Row 2: Phone & Event Date */}
      <div className="grid md:grid-cols-[130px,1fr,130px,1fr] gap-x-4 gap-y-2 items-center">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <div className="form-control">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <label className="label">
          <span className="label-text">Event Date</span>
        </label>
        <div className="form-control">
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      {/* Row 3: Event Type & Package */}
      <div className="grid md:grid-cols-[130px,1fr,130px,1fr] gap-x-4 gap-y-2 items-center">
        <label className="label">
          <span className="label-text">Event Type</span>
        </label>
        <div className="form-control">
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="birthday">Birthday Party</option>
            <option value="graduation">Graduation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <label className="label">
          <span className="label-text">Package</span>
        </label>
        <div className="form-control">
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="silver">Silver Package</option>
            <option value="gold">Gold Package</option>
            <option value="emerald">Emerald Package</option>
          </select>
        </div>
      </div>
      {/* Venue Address - full width */}
      <div className="grid md:grid-cols-[130px,1fr,130px,1fr] gap-x-4 gap-y-2 items-center">
        <label className="label">
          <span className="label-text">Venue</span>
        </label>
        <div className="form-control md:col-span-3">
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      {/* Additional Notes - full width */}
      <div className="grid md:grid-cols-[150px,1fr] gap-x-4 gap-y-2 items-center">
        <label className="label">
          <span className="label-text">Additional Notes</span>
        </label>
        <div className="form-control md:col-span-3">
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 w-full"
          />
        </div>
      </div>
      {/* Submit Button - full width */}
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Submit Booking Request
        </button>
      </div>
    </form>
  )
}