let p = document.querySelector('p')

let url = 'https://gkpp2c75v8.execute-api.us-east-1.amazonaws.com/prod/item'

fetch(url)
.then(response => response.json())
.then(json => p.innerHTML = json[0].get_count)
