//Arrays

var videoGames = ['ps3', 'xbox', 'nes']

console.log(videoGames.pop())

console.log(videoGames.push('sega'))

console.log(videoGames.pop())

console.log(videoGames.length)

console.log(videoGames)

// loop for
for(var i = 0; i < 10; i++){
    console.log(i)
}

//while
var i = 0
while(i < 10) {
    console.log(i)
    i++
}

var videoGamesOld = ['sega', 'snes', 'nes']

//exemplo de for com break
for(var i = 0; i <= videoGames.length; i++){
    console.log(videoGamesOld[i])
    if(videoGamesOld[i] === 'snes'){
        break
    }
}

// exemplo de Foreach

var videoGamesNew = ['sega', 'snes', 'nes']

videoGamesNew.forEach(function(item, index){
    console.log(item, index)
})
