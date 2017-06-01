module.exports = function(controller) {
    controller.hears(['search'], 'direct_message,direct_mention', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('I start searching...')
            convo.say(JSON.stringify(message))

            //convo.say('This is an example of using convo.ask with a single callback.');

            //convo.ask('What is your favorite color?', function(response, convo) {

                //convo.say('Cool, I like ' + response.text + ' too!');
                //convo.next();
            //});
        });

    });
}