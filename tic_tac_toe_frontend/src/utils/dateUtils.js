/**
 * Utility functions for date formatting and manipulation
 */

/**
 * Format a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "Jan 20, 2024")
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Format a date with time
 * @param {Date} date - The date to format
 * @returns {string} Formatted date and time string (e.g., "Jan 20, 2024 15:30")
 */
export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Get relative time string (e.g., "2 hours ago")
 * @param {Date} date - The date to compare
 * @returns {string} Relative time string
 */
export const getRelativeTime = (date) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const now = new Date();
  const diffInSeconds = (new Date(date).getTime() - now.getTime()) / 1000;

  // Convert to appropriate unit
  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(Math.round(diffInSeconds), 'seconds');
  } else if (Math.abs(diffInSeconds) < 3600) {
    return rtf.format(Math.round(diffInSeconds / 60), 'minutes');
  } else if (Math.abs(diffInSeconds) < 86400) {
    return rtf.format(Math.round(diffInSeconds / 3600), 'hours');
  } else {
    return rtf.format(Math.round(diffInSeconds / 86400), 'days');
  }
};

/**
 * Check if a date is today
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is today
 */
export const isToday = (date) => {
  const today = new Date();
  const compareDate = new Date(date);
  return (
    compareDate.getDate() === today.getDate() &&
    compareDate.getMonth() === today.getMonth() &&
    compareDate.getFullYear() === today.getFullYear()
  );
};
