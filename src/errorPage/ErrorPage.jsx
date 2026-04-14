import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Abstract Icon/Illustration */}
        <div className="mb-8 text-indigo-600">
          <svg 
            className="mx-auto h-24 w-24 opacity-20" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
          404
        </h1>
        <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute transform -translate-y-12 translate-x-24 text-white font-semibold">
          Page Not Found
        </div>
        
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Lost in space?
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Go Back
          </button>
          <a 
            href="/"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
          >
            Back to Home
          </a>
        </div>
      </div>

      {/* Subtle Footer Background Decor */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-indigo-600">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29C41.8,51.87,81.91,65.74,123.39,64.13,178.6,61.94,233.42,72.68,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;