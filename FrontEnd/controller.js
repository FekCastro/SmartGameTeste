const api_url = "http://localhost:8000/listGames"
var data = [];
// var get = function getGames(){
//     const response = fetch(api_url);
//     console.log("teste1",response);
//     data = response.json();
// }
// get();
$.ajax({
    headers: { "Accept": "application/json"},
    type: 'GET',
    url: api_url,
    crossDomain: true,
    beforeSend: function(xhr){
        xhr.withCredentials = true;
    },
    success: function(data, textStatus, request){
        console.log(data);
    }
});
console.log("teste1",data);

$('#example').DataTable( {
    data: data,
    columns: [
        { data: 'name' },
        { data: 'description' },
        { data: 'link' },
        { data: 'plataform' },
        { data: 'price' },
        { data: 'store' }
    ]
} );