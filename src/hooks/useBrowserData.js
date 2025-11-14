//javascript
import { useState, useEffect } from 'react';

export const useBrowserData = () => {
  const [browserData, setBrowserData] = useState({});

  useEffect(() => {
    const collectData = async () => {
      const data = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled,
        onlineStatus: navigator.onLine,
        referrer: document.referrer || 'Direct visit',
        currentUrl: window.location.href,
        timestamp: new Date().toISOString(),
        connectionType: navigator.connection?.effectiveType || 'unknown',
        deviceMemory: navigator.deviceMemory || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency || 'unknown'
      };

      // Get battery info
      if (navigator.getBattery) {
        try {
          const battery = await navigator.getBattery();
          data.batteryLevel = `${Math.round(battery.level * 100)}%`;
          data.charging = battery.charging;
        } catch (e) {
          data.batteryLevel = 'N/A';
        }
      }

      setBrowserData(data);
    };

    collectData();
  }, []);

  return browserData;
};