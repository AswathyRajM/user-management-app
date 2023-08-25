export const calculateAge = (birthday: Date) => {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age >= 1;
};
