
import { COMPANY_EMAIL } from './constants';

export const sendToCompanyEmail = async (data) => {
  const emailData = {
    to: COMPANY_EMAIL,
    subject: data.subject,
    body: JSON.stringify(data.body, null, 2)
  };

  try {
    // Option 1: NoCodeAPI
    const response = await fetch('YOUR_NOCODEAPI_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData)
    });

    // Log for debugging
    console.log('Email sent:', emailData);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
};