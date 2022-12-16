let mongoose =  require('mongoose');

let NewsFeedModel = mongoose.Schema(
    {
        subject: String,
        text: String,
        created: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "newsfeedList"
    }
);

module.exports = mongoose.model('NewsFeed',NewsFeedModel);