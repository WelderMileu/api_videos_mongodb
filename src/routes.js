const router = require('express').Router()
const mongoose = require('mongoose')
const video = require('./collections/collection_video.js')

// Listando nossa collection usando o method get
router.get('/', async (request, response) => {
	const video = mongoose.model('video')
	const list = await video.find({})
	console.log(list)
	response.json(list)
})

// Criando um novo video usando o method post
router.post('/post', (request, response) => {
	const { title, url } = request.body;

	const newVideo = mongoose.model('video')

	new newVideo({
		title,
		url
	}).save().then(() => {
		console.log("Video salvo na base de dados com sucesso")
		response.json({ title, url })
	}).catch(err => {
		console.log("Erro ao salvar video na base de dados: " + err)
		response.json({ erro: err })
	})
})

// Deletando um video com o method delete
router.delete('/delete?:id', (request, response) => {
	const id = request.query.id;
	const deleteVideo = mongoose.model('video')

	deleteVideo.deleteOne({ "_id" : id })
		.then(() => {
			response.json({ delected: id })
			console.log(id + " Deletado com sucesso")
		}).catch(err => {
			console.log("Erro ao deletar vidio" + video)
		})
})

// Editando video com o method put
router.put('/update?:id?:title?:url?:favorite', async (request, response) => {
	const { id, title, url, favorite } = request.query;
	const videoUpdate = mongoose.model('video')

	const Convert = elem => {
		const data = elem.toString()
		return data;
	} 

	await videoUpdate.updateOne({ "_id" : id }, { 
				title: Convert(title), 
				url: Convert(url), 
				favorite: favorite == '' ? true : false
			}).then(() => {
				response.json(request.query)
				console.log("Usuario de ID:" + id + " alterado com sucesso")
			}).catch(err => {
				response.json({ err: err })
				console.log("Erro ao tentar editar usuario " + err)
			})
})

module.exports = router;