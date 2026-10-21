'use client';

export type AnalyticsEventName =
  | 'cta_booking_open'
  | 'booking_step_complete'
  | 'booking_submission_success'
  | 'booking_submission_error'
  | 'whatsapp_click'
  | 'service_view_click'
  | 'diagnostic_executed'
  | 'roi_simulator_interact'
  | 'article_read_click';

interface EventPayload {
  service?: string;
  location?: string;
  label?: string;
  value?: string | number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;

  const eventData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    ...payload,
  };

  // Push to Google Tag Manager dataLayer if present
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  } else {
    window.dataLayer = [eventData];
  }

  // Send to Google Analytics 4 gtag if configured
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }
}
