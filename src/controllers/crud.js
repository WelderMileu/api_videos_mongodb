const { request, response } = require('express');
const mongoose = require('mongoose')
const video = require('../config/collections/collection_video')

class Rest {
    // Listando todos os videos da base de dados
    async videoAll(request, response) {
        
        try {
            const video = mongoose.model('video')
            
            const list = await video.find({})
            response.json(list)
        
        } catch(err) {
            response.json({ err: err })
        }
    }

    // Adicionando um novo video a base de dados
    async videoAdd(request, response) {
        try {
            const { title, url, favorite } = request.body;
            const newVideo = mongoose.model('video')

            await new newVideo({
                title,
                url,
                favorite
            }).save().then(() => {
                response.json({ title, url, favorite })
            }).catch(err => {
                response.json({ erro: err })
            })
        } catch(err) {
            response.json({ err: err })
        }
        
    }

    // Deletando video da base de dados
    videoDelete(request, response) {
        try {
            const id = request.query.id;
            const deleteVideo = mongoose.model('video')

            deleteVideo.deleteOne({ "_id" : id })
                .then(() => {
                    response.json({ delected: id })
                }).catch(err => {
                    response.json({ err: err})
                })
        } catch(err) {
            response.json({ err: err })
        }
        
    }

    // Alternado um determinado video com base no parametro vindo
    // do corpo da requisição
    async videoUpdate(response, request) {
        try {
            // Parametos vindo da url
            const { id, title, url, favorite } = request.body;
            const videoUpdate = mongoose.model('video') 

            // Fazendo o update do registro
            await videoUpdate.updateOne({ "_id" : id }, { 
                        title: title, 
                        url: url, 
                        favorite: favorite == 'true' ? true : false
                    }).then(() => {
                        response.json(request.body)
                    }).catch(err => {
                        response.json({ err: err })
                    })
        }catch(err) {
            response.json({ err: err })
        }
        
    }
}

// Esportando nossa classe
module.exports = Rest;
