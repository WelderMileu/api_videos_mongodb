const router = require('express').Router()
const mongoose = require('mongoose')
const video = require('./collections/collection_video.js')

router.get('/', async (request, response) => {
	const video = mongoose.model('video')
	const list = await video.find({})
	console.log(list)
	response.json(list)
})

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

module.exports = router;