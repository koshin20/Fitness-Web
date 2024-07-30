import React, { useContext, useState } from 'react';
import { FitnessContext } from '../FitnessContext';

const FitnessList = () => {
  const { members, editMember, deleteMember } = useContext(FitnessContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const handleEditClick = (member) => {
    setIsEditing(true);
    setCurrentMember(member);
  };

  const handleDelete = (memberId) => {
    deleteMember(memberId);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editMember(currentMember);
    setIsEditing(false);
    setCurrentMember(null);
  };

  const handleInputChange = (e) => {
    setCurrentMember({ ...currentMember, [e.target.name]: e.target.value });
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fitness Members List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Fitness Goal</th>
            <th className="px-4 py-2">Preferred Time</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id}>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">{member.phone}</td>
              <td className="border px-4 py-2">{member.fitnessGoal}</td>
              <td className="border px-4 py-2">{member.preferredTime}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditClick(member)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Edit Member</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={currentMember.name}
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
                value={currentMember.email}
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
                value={currentMember.phone}
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
                value={currentMember.fitnessGoal}
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
                value={currentMember.preferredTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FitnessList;
