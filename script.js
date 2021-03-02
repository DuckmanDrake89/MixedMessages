const randomNum = num => {
    return Math.floor(Math.random() * num);
}

const nameItems = {
    title : ['Lord','Sir','Lady','King', 'Queen', 'Joker'],
    name : ['Lee','Mike','Dave','Sam','Ryan'],
    honor : ['True','Brave','Mighty','Lost','Confused','Broken','Allmighty','Dead'],
    from : ['Camelot', 'Sussex', 'Scotland', 'Wessex', 'London','Winchester']
}

let finalMessage = [];

for (let item in nameItems) {
    let itemIndex = randomNum(nameItems[item].length)
    switch(item) {
        case 'title':
            finalMessage.push(`${nameItems[item][itemIndex]}`) 
            break
        case 'name':
            finalMessage.push(`${nameItems[item][itemIndex]}`)
            break
        case 'honor':
            finalMessage.push(`the ${nameItems[item][itemIndex]},`)
            break
        case 'from':
            finalMessage.push(`of ${nameItems[item][itemIndex]}.`)
            break
    }
}

console.log(finalMessage.join(' '));