function RandomFact() {
fetch("https://numbersapi.p.rapidapi.com/random/trivia?json=true&fragment=true&max=20&min=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.text);
    console.log(response.number);

    document.getElementById('RandomNumber').innerHTML = response.number;
    document.getElementById('RandomFact').innerHTML = response.text;

    console.clear();

})

.catch(err => {
	console.error(err);
});
}

function YrFact() {

    const YrNum = document.getElementById('YrNumber').value;

    fetch(`https://numbersapi.p.rapidapi.com/${YrNum}/year?json=true&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.text);

    document.getElementById('YrFact').innerHTML = response.text;
})
.catch(err => {
	console.error(err);
});

}

function TrFact() {

    const TrNum = document.getElementById('TrNumber').value;

    fetch(`https://numbersapi.p.rapidapi.com/${TrNum}/trivia?json=true&notfound=floor&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.text);

    document.getElementById('TrFact').innerHTML = response.text;
})
.catch(err => {
	console.error(err);
});

}

function MathFact() {

    const MathNum = document.getElementById('MathNumber').value;

    fetch(`https://numbersapi.p.rapidapi.com/${MathNum}/math?json=true&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.text);

    document.getElementById('MathFact').innerHTML = response.text;
})
.catch(err => {
	console.error(err);
});

}

function DateFact() {

    const dayNum = document.getElementById('Day').value;
    const mnthNum = document.getElementById('Mnth').value;

    fetch(`https://numbersapi.p.rapidapi.com/${mnthNum}/${dayNum}/date?json=true&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.text);

    document.getElementById('DateFact').innerHTML = response.text;
})
.catch(err => {
	console.error(err);
});

}