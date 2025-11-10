// Example utility functions
// Add your helper functions here

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
