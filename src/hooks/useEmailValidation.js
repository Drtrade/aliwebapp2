// javascript
import { useState } from 'react';

export const useEmailValidation = () => {
  const [isValidating, setIsValidating] = useState(false);

  const validateEmail = async (email) => {
    // Basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, message: 'Please enter a valid email format.' };
    }

    // Check disposable domains
    const disposableDomains = ['tempmail', 'throwaway', '10minutemail', 'guerrillamail', 'mailinator'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (disposableDomains.some(d => domain?.includes(d))) {
      return { valid: false, message: 'Please use a real email address, not a temporary one.' };
    }

    // API validation
    try {
      setIsValidating(true);
      const response = await fetch(`https://api.eva.pingutil.com/email?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      setIsValidating(false);

      if (data.status === 'success' && data.data.deliverable === true) {
        return { valid: true };
      } else {
        return { valid: false, message: 'This email address does not exist. Please enter a real email.' };
      }
    } catch (err) {
      setIsValidating(false);
      return { valid: true }; // Allow if API fails
    }
  };

  return { validateEmail, isValidating };
};
