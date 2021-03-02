const randomNum = num => {
    return Math.floor(Math.random() * num);
}


const generateName = () => {

    const nameItems = {
        title : ['Lord','Sir','Lady','King', 'Queen', 'Joker'],
        name : document.getElementById("user").value,
        honor : ['True','Brave','Mighty','Lost','Confused','Broken','Allmighty','Dead'],
        from : ['Camelot', 'Sussex', 'Scotland', 'Wessex', 'London','Winchester']
    }

    if (document.getElementById("user").value === '') {
        return alert('Please enter a name')
    }

    let finalMessage = [];

    for (let item in nameItems) {
        let itemIndex = randomNum(nameItems[item].length)
        switch(item) {
        case 'title':
            finalMessage.push(`${nameItems[item][itemIndex]}`) 
            break
        case 'name':
            finalMessage.push(`${nameItems[item]}`)
            break
        case 'honor':
            finalMessage.push(`the ${nameItems[item][itemIndex]},`)
            break
        case 'from':
            finalMessage.push(`of ${nameItems[item][itemIndex]}.`)
        }
    }
    
    document.getElementById("demo").innerHTML = finalMessage.join(' ');
    alert(finalMessage.join(' '));
}

console.log(generateName());