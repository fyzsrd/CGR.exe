import React, { useState } from "react";
import Productsdata from "../data/all_products_full.json";

const Modal = ({ isOpen, onClose, door }) => {
    const [showMSP, setShowMSP] = useState(false);
  if (!isOpen || !door) return null;

  // Find model data from JSON by matching model name
  const modelData = Productsdata.models.find(
    (item) => item.model === door.name
  );

  // Local state to toggle MSP column


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-3xl max-h-[90vh] flex flex-col">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold">{door.name}</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold text-lg hover:text-red-800"
          >
            ✕
          </button>
        </div>

        {/* Door Image */}
        {door.img && (
          <div className="flex justify-center mb-4">
            <img
              src={door.img}
              alt={door.name}
              className="w-40 h-auto rounded shadow"
            />
          </div>
        )}

        {/* Toggle MSP Button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => setShowMSP(!showMSP)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            {showMSP ? "Hide WSP" : "Show WSP"}
          </button>
        </div>

        {/* Variants Table - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="p-2 border">Model Name</th>
                <th className="p-2 border">Description</th>
                {showMSP && <th className="p-2 border">MSP</th>}
                <th className="p-2 border">MRP</th>
              </tr>
            </thead>
            <tbody>
              {modelData ? (
                modelData.variants.map((variant, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">{door.name}</td>
                    <td className="p-2 border">{variant.description}</td>
                    {showMSP && (
                      <td className="p-2 border">
                        ₹{variant.MSP.toLocaleString()}
                      </td>
                    )}
                    <td className="p-2 border">
                      ₹{variant.MRP.toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={showMSP ? 4 : 3}
                    className="p-4 text-center text-gray-500 border"
                  >
                    No data found for this model
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
