let displayWelcomeMessage = function(req, res){
    res.send({"welcome_message":"Welcome to Afrikorture Marketplace"});
};


module.exports = displayWelcomeMessage;