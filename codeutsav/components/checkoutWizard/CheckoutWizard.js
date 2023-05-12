import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap " >
      {['Basic Information', 'Past Records', 'Medications'].map(
        (step, index) => (
          <div
            key={step}
            className="flex-1 border-b-2  
          text-center border-indigo-500   text-indigo-500"
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}