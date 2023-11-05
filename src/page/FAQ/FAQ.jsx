/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Faq = ({ faqData }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left">
              <p className="text-lg font-semibold">{item.question}</p>
              <span>{expanded === index ? '▲' : '▼'}</span>
            </button>
            {expanded === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
