const axios = require('axios');

const { createWriteStream } = require('fs');
const debug = require('debug')('Controller');
const base_url = process.env.API_URL

const controller = {
    homePage(req, res) {
        res.render('home');
    },

    async getRandom(req, res) {
        
        try {
            const response = await axios.get(`${base_url}/random`);
            
            if (response.status != 200) {
                console.error(response.status);
                return;
            }

            res.json(response.data);
        } catch (err) {
            console.log(err);
        }
    },

    async getOneByPerson(req, res) {
        
        const { personnage  } = req.params;
        try {
            const response = await axios.get(`${base_url}/random/personnage/${personnage}`);

            if (response.status != 200) {
                console.error(response.status);
                return;
            }

            res.json(response.data);
        }
        catch (err) {
            console.log(err);
        }
    },

    async getAllByPerson(req, res) {

    },

    async getSounds(req, res) {
        const { filename } = req.params;
        try {
            const response = await axios.get(`https://github.com/sin0light/api-kaamelott/blob/master/assets/sounds/${filename}.mp3`);
            debug('Sound response',response)
            if (response != 200) {
                console.error(response.status);
                return;
            }
            debug('response sound', response.data)
            const soundUrl = `https://github.com/sin0light/api-kaamelott/blob/master/assets/sounds/${filename}.mp3`;
            downloadSound(soundUrl,'./son.mp3');
        }
        catch (err) {
            console.log(err)
        }
    }
}


async function downloadSound(url,path) {
const soundResponse = await axios.get(url, {
    responseType: 'stream'
});
const writer = createWriteStream(path);
soundResponse.data.pipe(writer);
}

module.exports = controller;