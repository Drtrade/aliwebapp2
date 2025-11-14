import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { generateCaptcha } from '../../utils/captchaGenerator';

const CaptchaInput = ({ onValidate }) => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    refreshCaptcha();
  }, []);

  useEffect(() => {
    onValidate(userInput === captcha && userInput !== '');
  }, [userInput, captcha, onValidate]);

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setUserInput('');
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        Verify you're human
      </label>
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex-1 bg-gray-300 px-4 py-3 rounded-lg font-mono text-2xl text-center tracking-wider border-2 border-gray-300 select-none">
          {captcha}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <RefreshCw className="h-6 w-6" />
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Enter the code above"
      />
    </div>
  );
};

export default CaptchaInput;