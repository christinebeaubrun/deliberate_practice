var makeHashTable = function(optionalNumber){
  var bucketLength = optionalNumber || 20;
  var bucket = Array(bucketLength);

  var createKeyIndex = function (str) {
    var strCharCodeNum = 0;
    for(var index = 0; index < str.length; index++){
      strCharCodeNum += str.charCodeAt(index);
    }
    var keyIndex = strCharCodeNum % bucketLength;
    return keyIndex;
  };

  var isNullUndefinedEmpty = function (arg) {
    return (arg === null || arg === undefined || arg === "");
  };

  return {
    set: function (keyName, valueName) {
      if ( isNullUndefinedEmpty(keyName) ) {
        throw new Error('Key cannot be null, undefined, or empty');
      }
      if ( valueName === null || valueName === undefined ) {
        throw new Error('Value cannot be null or undefined');
      }
      var keyIndex = createKeyIndex(keyName);
      if (!bucket[keyIndex]) {
        bucket[keyIndex] = [[keyName,valueName]];
      } else {
        var doesKeyNameExist = false;
        bucket[keyIndex].forEach(function( pair ){
          if ( pair[0] === keyName ) {
            pair[1] = valueName;
            doesKeyNameExist = true;
          }
        });
        if ( !doesKeyNameExist ) {
          bucket[keyIndex].push([keyName,valueName]);
        }
      }
    },
    get: function (keyName) {
      if ( isNullUndefinedEmpty(keyName)) {
        throw new Error('Key cannot be null, undefined, or empty');
      }
      var keyIndex = createKeyIndex(keyName);
      var foundKeyValue;
      if ( bucket[keyIndex] ) {
        bucket[keyIndex].forEach(function(pair){
          if ( pair[0] === keyName) {
            foundKeyValue = pair[1];
          }
        });
        if ( foundKeyValue ) {
          return foundKeyValue;
        }
      } else {
        throw new Error('Key does not exist.');
      }
    }
  };
};