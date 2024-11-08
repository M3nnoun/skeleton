import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader animate-spin rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        <p className="mt-2 text-gray-500">Please wait while we prepare everything for you</p>
      </div>
    </div>
  );
}
