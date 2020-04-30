var AliasApi = require("../api/AliasApi")

var api = new AliasApi()
var alias = "alice"; // {String} The alias to be queried

api.getAddressFromAlias(alias).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
}, function(error) {
    console.error(error);
});