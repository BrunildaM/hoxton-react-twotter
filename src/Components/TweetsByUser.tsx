import { useEffect } from "react"
import { useParams } from "react-router-dom"
import TweetsList, { Props } from "./TweetsList"

function TweetsByUser({tweets, setTweets}: Props) {

    
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3005/tweets?userid=${params.id}`)
        .then (resp => resp.json())
        .then(tweetsToDisplay => setTweets(tweetsToDisplay))
    }, [])


    return (
        <TweetsList tweets={tweets} setTweets={setTweets} />
    )
}

export default TweetsByUser