import {FeedItem, parse} from "react-native-rss-parser";
import axios from "axios";


interface Episode {
    id: string
    url: string
}

class Rss {
    static async download() {
        function episode(feedItem: FeedItem): Episode {
            return {
                id: feedItem.id,
                url: feedItem.enclosures[0].url
            };
        }

        return axios.get("http://www.loremenpodcast.com/feed/podcast")
            .then(response => response.data)
            .then(data => parse(data))
            .then(feed => feed.items.map(item => episode(item)));
    }
}

export default Rss
