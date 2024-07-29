const { Url } = require('../../db');
const shortId = require('shortid');

const createUrl = async (req, res) => {

    const { fullUrl } = req.body;
    const shortid = shortId.generate();
    try {
        const newUrl = await Url.create({
            url: fullUrl,
            shortId: shortid
        });

        res.redirect('/');

    } catch (error) {
        console.log(error);
    }

};

const getUrls = async (req, res) => {
    try {
        const urls = await Url.findAll();
        
        res.render('index', { urls })
    } catch (error) {
        console.log(error);
    }

}

const getUrl = async (req, res) => {

    const { shortId } = req.params;

    try {
        const shortUrl = await Url.findOne({ where: {shortId} });
        if(!shortId) return res.status(400).send({ msg: 'La url no fue encontrada' });

        shortUrl.clicks = shortUrl.clicks + 1;
        await shortUrl.save();

        res.redirect(shortUrl.url);

    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    createUrl,
    getUrls,
    getUrl
}
