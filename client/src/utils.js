function getInitials(str) {
  let words = str.split(" ")
  let initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase());
  return initials.join("");
}

export { getInitials };