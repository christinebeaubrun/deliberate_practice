var makeHashTable = function (optionalNumber) {
  var bucketLength = optionalNumber || 10;
  var bucket = Array(bucketLength);

  var createKeyIndex = function (str) {
    var strCharCode = 0;
    for (var index = 0; index < str.length; index ++) {
      strCharCode += str.charCodeAt(index);
    }
    var keyIndex = strCharCode % bucketLength;
    return keyIndex;
  };

  var isNullUndefinedEmpty = function (arg) {
    return (arg === null || arg === undefined || arg === "");
  };

   return {
    /*
      function SET
        -throw error if keyName and ValueName not up to standard
        -get keyIndex for the keyName 
        -check if the keyIndex in bucket is defined
        ---if not defined, set a bucket at that index
        ---if defined
        -----iterate at keyIndex
        -----if keyName exists
        -------set the valueName
        -----if keyName does not exist
        ------push a new bucket at that keyIndex
    */
    set: function (keyName, valueName) {
      if ( isNullUndefinedEmpty( keyName ) ) {
        throw new Error( 'Key cannot be null, undefined, or empty');
      }
      if ( valueName === null || valueName === undefined ) {
        throw new Error( 'Value cannot be null or undefined');
      }
      var keyIndex = createKeyIndex(keyName);
      if ( !bucket[keyIndex]) {
        bucket[keyIndex] = [[keyName,valueName]];
      } else {
        var doesKeyNameExist = false;
        bucket[keyIndex].forEach(function (pair) {
          if (pair[0] === keyName) {
            pair[1] = valueName;
            doesKeyNameExist = true;
          }
        });
        if ( !doesKeyNameExist ) {
          bucket[keyIndex].push([keyName,valueName]);
        }
      }
    },
    /*
      function GET
        -throw error if keyName not up to standard
        -get keyIndex for the keyName
        -iterate bucket at keyIndex
        -----if keyName exists
        -------return value
        -----if keyName does not exist
        ------throw error
    */
    get: function (keyName) {
      if ( isNullUndefinedEmpty(keyName) ) {
        throw new Error( 'Key cannot be null, undefined, or empty');
      }
      var keyIndex = createKeyIndex(keyName);
      var foundValueName;
      bucket[keyIndex].forEach(function (pair) {
        if ( pair[0] === keyName ) {
          foundValueName = pair[1];
        }
      });
      if ( foundValueName ) {
        return foundValueName;
      } else {
        throw new Error( 'Key does not exist.');
      }
    },
    viewHashTable: function () {
      return bucket;
    }
   };
};