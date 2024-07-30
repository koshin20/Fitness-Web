import React, { useState, useEffect } from 'react';

const generateMockReceipts = (num) => {
  const names = [
    'Koshin', 'Warfaa Ali Samatar', 'Sayid-Ali Abduulahi', 'Mohamed Ali', 'Abdiraxmaan Hussein',
    'Muhudiin Dhaayow', 'Abdifatah Ali', 'Abdisalam Abdi', 'Ahmed Mohamed', 'Hassan Kaafi',
    'Rooble Cilmi', 'Cambaro Jaamac', 'Hirsi Diiriye', 'Husseein Bille ', 'Badrudiin',
    'Mohamed Khaliif', 'Faarax Murtiile', 'Abshir Omar', 'Badikarim Wafdi', 'Abduulahi Abdi',
    'Bashiir Abdi', 'Abdifataah Abdullahi', 'Saciid Abdi', 'Mohamed Baafow', 'Abdirzaq Mohamed',
    'Abdulkadir Cilmi', 'Aaden Omar Aaden', 'Abdi Curi', 'Abdinajiib', 'Bakarow'
  ];

  const amounts = [
    '$15', '$15', '$20', '$20', '$50', '$15', '$15', '$15', '$50', '$15',
    '$50', '$15', '$50', '$15', '$20', '$15', '$50', '$15', '$20', '$20',
    '$50', '$15', '$15', '$15', '$50', '$50', '$20', '$15', '$50', '$20'
  ];

  return Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    amount: amounts[i % amounts.length],
    date: new Date(2024, 6, i + 1).toISOString().split('T')[0] // Generating dates from July 1, 2024
  }));
};

const Receipt = () => {
  const [receipts, setReceipts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReceipts, setFilteredReceipts] = useState([]);

  useEffect(() => {
    // Generate mock data for 30 receipts
    const data = generateMockReceipts(30);
    setReceipts(data);
    setFilteredReceipts(data);
  }, []);

  useEffect(() => {
    // Filter receipts based on search term
    setFilteredReceipts(
      receipts.filter(receipt =>
        receipt.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, receipts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Rasiidka (Receipts)</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReceipts.length > 0 ? (
            filteredReceipts.map((receipt) => (
              <tr key={receipt.id}>
                <td className="border px-4 py-2">{receipt.name}</td>
                <td className="border px-4 py-2">{receipt.amount}</td>
                <td className="border px-4 py-2">{receipt.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border px-4 py-2 text-center">No receipts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;
