import React, { useState, useContext } from 'react';
import { FitnessContext } from '../FitnessContext';

const FitnessRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    preferredTime: '',
  });

  const { addMember } = useContext(FitnessContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember({ ...formData, id: Date.now() }); // Add unique ID to each member
    setFormData({ name: '', email: '', phone: '', fitnessGoal: '', preferredTime: '' }); // Reset form
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fitness Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fitnessGoal" className="block font-medium mb-2">
            Fitness Goal:
          </label>
          <input
            type="text"
            id="fitnessGoal"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="preferredTime" className="block font-medium mb-2">
            Preferred Workout Time:
          </label>
          <input
            type="text"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default FitnessRegistration;
