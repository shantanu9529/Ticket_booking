var Session_data_admin=(function() 
{
    
var admin_id ="";
var getId =function()
{
    return admin_id;
}
var setId = function(id)
{
    admin_id = id;
}
    return{
        getId:getId,
        setId:setId
    }
})();
export default Session_data_admin;