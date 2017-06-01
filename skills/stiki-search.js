module.exports = function(controller) {
    controller.hears(['search'], 'direct_message,direct_mention', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            const term = message.text.replace('search ', '')
            convo.say('OK, let me search for...' & term)

            //convo.say('This is an example of using convo.ask with a single callback.');

            //convo.ask('What is your favorite color?', function(response, convo) {

                //convo.say('Cool, I like ' + response.text + ' too!');
                //convo.next();
            //});
        });
    });

    controller.hears(['cya'], 'direct_message,direct_mention', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('Cyaaaa')
        });
    });
}