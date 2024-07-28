var SessionData=(function() 
{
    
var user_id ="";
var getId =function()
{
    return user_id;
}
var setId = function(id)
{
    user_id = id;
}
    return{
        getId:getId,
        setId:setId
    }
})();
export default SessionData;