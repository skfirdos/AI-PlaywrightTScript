enum HTTPMethod{
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
function sendRequest(method: HTTPMethod, endpoint: string): void {
console.log(HTTPMethod + " " + endpoint + " --> 200 OK");}

sendRequest(HTTPMethod.GET, "/api/users");
sendRequest(HTTPMethod.POST, "/api/users");
sendRequest(HTTPMethod.PUT, "/api/users/1");
