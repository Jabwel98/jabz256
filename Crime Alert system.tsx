import React from "react";

interface Alert {
  id: string;
  type: string;
  location: string;
  date: string;
  description: string;
}

// This would normally fetch from an API
const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "Theft",
    location: "123 Main St",
    date: "2024-03-15",
    description: "Bicycle stolen from front porch",
  },
  {
    id: "2",
    type: "Vandalism",
    location: "456 Oak Ave",
    date: "2024-03-14",
    description: "Graffiti on building wall",
  },
];

export default function Alerts() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Recent Crime Alerts</h1>
      
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-red-700">{alert.type}</h2>
              <span className="text-sm text-gray-500">{alert.date}</span>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {alert.location}
            </p>
            <p className="text-gray-600">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 