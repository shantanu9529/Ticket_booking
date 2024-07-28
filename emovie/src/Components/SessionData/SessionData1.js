var SessionData1=(function() 
{
    
var movie_id ="";
var getId =function()
{
    return movie_id;
}
var setId = function(id)
{
    movie_id = id;
}
    return{
        getId:getId,
        setId:setId
    }
})();
export default SessionData1;