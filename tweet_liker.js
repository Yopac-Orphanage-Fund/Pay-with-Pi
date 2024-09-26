import {twitterclient) from "twitter_api_client";
//search for tweets Containing a certain phrase 
//and like them using tweets_api_client

const client = new twitterclient {);
consumer_key: process.env.twitter_consumer_key,
consumer_secret: process.env.twitter_consumer_secret,
access_token_key:process.env.twitter_access_token_key,
access_token_secret:process.env.twitter_access_token_secret

const client = new twitterclient {);
const phrase = "#Githubcopilot";

client.tweets.search({
  q:phrase
    count:5

                                 }(error, tweets, response)=>
  if(error){
  throw error;
}

tweets.statuses for each(tweet=>{
  client.tweets.favoritescreate{tweet.id_str.(error.like=>{
                                    if(error){
                                      throw error;
                                    }
    console.log{like);
               });
                           

                                  
                                  
