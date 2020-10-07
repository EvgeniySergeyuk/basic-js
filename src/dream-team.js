const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {  
  if (typeof(members) !== 'object' || members === undefined || members === null) return false;
  let dreamTeamName = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      dreamTeamName += members[i].trim().toUpperCase().split('')[0];
    }    
  }
  return dreamTeamName.split('').sort().join('');
};
