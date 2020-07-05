import Rss from './rss'

(async () => {
    const episodes = await Rss.download();
    console.log(episodes);
})()
