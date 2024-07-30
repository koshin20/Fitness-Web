import React, { createContext, useState } from 'react';

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  const editMember = (updatedMember) => {
    setMembers(members.map(member => member.id === updatedMember.id ? updatedMember : member));
  };

  const deleteMember = (memberId) => {
    setMembers(members.filter(member => member.id !== memberId));
  };

  return (
    <FitnessContext.Provider value={{ members, addMember, editMember, deleteMember }}>
      {children}
    </FitnessContext.Provider>
  );
};
