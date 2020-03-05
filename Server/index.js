const express = require('express'),
    cors = require('cors'),
    port = 5115,
    app = express(),
    grassCtrl = require('./controllers/grassController')
    pokemonCtrl = require('./controllers/pokemonController')

app.use(cors())
app.use(express.json())

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)
app.get('/api/pokemon', pokemonCtrl.getCaughtPokemon)
app.post('/api/pokemon', pokemonCtrl.catchPokemon)
app.put('/api/pokemon/:id', pokemonCtrl.editPokemonName)
app.delete('/api/pokemon/:id', pokemonCtrl.releasePokemon)


app.listen(port, () => console.log(` RUN ${port}! RUN!`))

