const { Command } = require('yuuko');
const got = require('got');
module.exports = new Command('meme', (message) => {
    got('https://www.reddit.com/r/memes/random/.json')
        .then((response) => {
            const [list] = JSON.parse(response.body);
            const [post] = list.data.children;

            const permalink = post.data.permalink;
            const memeUrl = `https://reddit.com${permalink}`;
            const memeImage = post.data.url;
            const memeTitle = post.data.title;
            const memeUpvotes = post.data.ups;
            const memeNumComments = post.data.num_comments;
            message.channel.createMessage({
                embed: {
                    title: memeTitle,
                    url: memeUrl,
                    image: {
                        url: memeImage,
                    },
                    color: 15267908,
                    footer: {
                        text: `👍 ${memeUpvotes}  💬 ${memeNumComments}`,
                    },
                },
            });
        })
        .catch(err => {
            console.error(err);
        });
});
