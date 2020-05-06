import AuthApi from "./api/AuthApi";


const api = new AuthApi()
const address = "coinex10c22dwn7hxps77tnkpj5pzu9zcpq5zf76xms55"; // {String} The alias to be queried
api.getAccount(address).then((data) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
    console.error(error);
});
