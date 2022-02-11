const image = document.querySelector('.flag')
const countrySpan = document.querySelector('.country')
const input = document.querySelector('input')
const capitalSpan = document.querySelector('.spanCapital')
const habitantSpan = document.querySelector('.spanHabitant')
const spanLanguages = document.querySelector('.spanLanguages')
const spanRegions = document.querySelector('.spanRegions')
const spanSymbol = document.querySelector('.spanSymbol')
const symbol2 = document.querySelector('.symbol2')
const spanRepublic = document.querySelector('.spanRepublic')
const wikibtn = document.querySelector('.wiki')

const userAction = async() => {

    var countryInput = input.value;
    console.log(countryInput)

    country = countryInput;
    url = 'https://restcountries.com/v2/name/' + country
    const response = await fetch(url)
    const myJson = await response.json(); 
    console.log(url) 

    // var img = myJson[0].flag

    var element = [
        myJson[0].name, 
        myJson[0].flag,
        myJson[0].capital,
        myJson[0].region,
        myJson[0].population,
        myJson[0].languages[0].name,
        myJson[0].currencies[0].code,
        myJson[0].currencies[0].symbol,
        myJson[0].altSpellings[1]
    ]

    image.src = element[1]
    countrySpan.innerHTML = element[0]

    capitalSpan.innerHTML = element[2]
    habitantSpan.innerHTML = element[4]
    spanLanguages.innerHTML = element[5]
    spanRegions.innerHTML = element[3]
    spanSymbol.innerHTML = element[6] + ' / '
    symbol2.innerHTML = element[7]
    spanRepublic.innerHTML = element[8]

    if(myJson[0].altSpellings[1] === undefined) {
        spanRepublic.innerHTML = 'This country does not have a Republic'
    }

    console.log(element)
    console.log(myJson)

    wikiurl = 'https://fr.wikipedia.org/wiki/' + myJson[0].name
    wikibtn.href = wikiurl;

}