function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB');
}
module.exports = formatDate;
