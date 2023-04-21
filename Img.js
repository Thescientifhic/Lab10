class movie {
    constructor(name,movimg,movimg2,stars,save,description){

        this.name = name
        this.movimg = movimg
        this.movimg2 = movimg2
        this.stars = stars
        this.save = save
        this.description = description
    }

    toHtml(id) {
        return `
            <div class="info">
                <img class="img-c" src="${this.movimg}">
                <div class="calificacion"><P class="rating">Ratings:</P>
                <img class="star" src="./yellow_fill_star.png" alt="">
                <img class="star" src="./yellow_fill_star.png" alt="">
                <img class="star" src="./yellow_fill_star.png" alt="">
                <img class="star" src="./yellow_fill_star.png" alt="">
                <img class="star" src="./yellow_outline_star.png" alt="">
                <img class="saved" src="./baseline_bookmark_border_white_48dp.png" alt=""></div>
            </div>`
    }

    toBanner() {
        return `
        <div class="info-container">
        <h1 class="titulo" id="name">M${this.name}<span class="span">(4.5 Rating)</span></h1>
        <p class="text">${this.description}</p>
            <img src="${this.movimg2}" />
    </div>`

    }
}

class movie_2 {
    constructor(name,movimg,movimg2,description){

        this.name = name
        this.movimg = movimg
        this.movimg2 = movimg2
        this.description = description
    }

    toHtml(id) {
        return `
        <img class="img-c" src="${this.movimg}">`

        }
        toBanner() {
            return `
            <div class="info-container">
            <h1 class="titulo" id="name">M${this.name}<span class="span">(4.5 Rating)</span></h1>
            <p class="text">${this.description}</p>
                <img src="${this.movimg2}" />
        </div>`

        }

}

var movie1 = new movie ("Anita","./img/Anitta.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdrDIfRI_Q-ihVaiQW30MZDTfCntCMC2bFwiM9b302xXymPR7xGKXbsTxTluM_fa_d-XC1CAwGKhdsBWWxg66wYiBN9U7HjV-09y.jpg?r=5e8", 5, true, "En este documental íntimo, la reina del pop brasileño Anitta revela a la mujer detrás del éxito y habla de la fama, la familia y su férrea ética laboral.")
var movie2 = new movie ("Cirujanos Innovadores","./img/Cirujanos.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA4yCrqlVUIB_Oq62D598MgUdwigWgLcrnG0sKawH57xbiYJX38YLkOW99TvVpVsbI0xVp2I-8IjOs83ZpbrhJc2A2tQOkGixOz.jpg?r=473", 5, true, "Son filósofos, narradores de historias y pioneros en sus campos. Cuatro cirujanos reflexionan sobre sus vidas y profesiones en esta estimulante docuserie.")
var movie3 = new movie ("El Climax Del Millon","./img/climax.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZQzt78fC1Mf3beILu1yXu89WOVzO51wZeO9aqRBVXdRO1jitAfuQRk0RHKS9tuJ15jKzhYPEVChrFw7Zjh8ulZ0KWK9XtsRkZmG.jpg?r=9bb", 5, true, "Con entrevistas a actores, actrices, activistas y exempleados, este documental presenta un análisis profundo de los éxitos y los escándalos de Pornhub.")
var movie4 = new movie ("El caso Fourniret","./img/el-caso.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZlxroySLtx-YsiZOvnnNiF-1Ehyt80zuG09FyESNSc1FvEFi68Dxg4zfLvN7ewRW-6UqToa-lt_l6emfYlJf1CWkRQKh3gu65wu.jpg?r=d86", 5, true, "De 1987 a 2003, Michel Fourniret forjó su legado como el asesino más infame de Francia. Pero su esposa fue siempre un enigma: ¿instrumento o cómplice?")
var movie5 = new movie ("Entrevias","./img/entrevias.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdFoAa7ETfiNb6SbyOVvSP5te5ItA3Zis7Uauhhw3vQo73-pzP1-XXHDU-RQ65hLCxNstbvFpj6LAJ86_0wxvBcRgpMDIe0gmXLe.jpg?r=dd2", 5, true, "Cuando su nieta adolescente cae víctima de los narcotraficantes que controlan el barrio, un hastiado veterano de guerra decide hacerse cargo del asunto.")
var movie6 = new movie ("Sr Iglesias","./img/Iglesias.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX5XNJAotCsUE_MvwEXsY6ebwkVkrhjD6heZLqyrfESnaJ0yOB4yOk7cCrN-c-woFWhfdlCf6xH7Ee55eG1GxfOfzsiNsw6ps1kd.jpg?r=2d5", 5, true, "Gabriel Iglesias, un divertido profesor, trata de hacer la diferencia en las vidas de algunos estudiantes de bajo desempeño.")
var movie7 = new movie ("Juega Sucio","./img/juega-sucio.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWFdbg_0p4rJWLwpJ-2TxpH39hRDc5xUk9z6fRKANUM7JrqvbanZOsbCLkaeaiN8WRfqu3ncepCsDfP5VBSilTYAmUUop6mRj_3m.jpg?r=21b", 5, true, "dEn este juego, los concursantes usan su inteligencia —y su capacidad para el engaño— para ganar el gran premio. La única regla: ¡que no los descubran!")
var movie8 = new movie ("Los Bridgerton","./img/Los-Bridgerton-Netflix.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABba1Vt6nAr4BYxLluZUlH7l37yvjN3xsPXZdHsT2CIAWO3nns2Olpn1XoLItkMq64It9ap1xgBQsXIhDZ0da5ty2pgP5LrmtNzhA.jpg?r=734", 5, true, "Los ocho entrañables hermanos de la familia Bridgerton buscan el amor y la felicidad en la alta sociedad londinense. Inspirada en las novelas superventas de Julia Quinn.")

var movie9 = new movie_2 ("Los Bridgerton","./img/Los-Bridgerton-Netflix.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABba1Vt6nAr4BYxLluZUlH7l37yvjN3xsPXZdHsT2CIAWO3nns2Olpn1XoLItkMq64It9ap1xgBQsXIhDZ0da5ty2pgP5LrmtNzhA.jpg?r=734", 5, true, "Los ocho entrañables hermanos de la familia Bridgerton buscan el amor y la felicidad en la alta sociedad londinense. Inspirada en las novelas superventas de Julia Quinn.")
var movie10 = new movie_2 ("Luther","./img/luther.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABenlIBjjAddCzvkpMuydUz3C8hS8ckXLI1BpX0OckLlMXHAiB9Obs5vmdbdAlAm8kPmqt9S_P2bk182Ea5SWPN559QyZX5NT6mMs.jpg?r=fb0", 5, true, "Atormentado por un caso no resuelto, el brillante pero deshonrado detective de la Policía londinense John Luther escapa de prisión para cazar a un despiadado asesino en serie.")
var movie11 = new movie_2 ("Masameer","./img/masameer.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABS5-gP-HC9zSI2g6-KbngH7LTev1Q2f102Dn6sUY5wwsjhiGcFMFfkB6_B7uivJy-Gv4GybZG-QdkYYmotRAF3BgAC-fbuYr1lcT.jpg?r=7db", 5, true, "Con humor negro y personajes excéntricos, esta serie web ofrece una jocosa visión de los cambios y las transiciones culturales que vivió Arabia Saudita entre 2011 y 2019.")
var movie12 = new movie_2 ("Outrage","./img/outrage.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbFWSHjIcUm06-HFz9MMypDpNSad0WH8jNSRvlHYm4i4I4YAbWXN9-rzhq7PHjGLVjRhUG1AsaOW9U5Ew6FB1hdOsDPp2xzW4V88.jpg?r=154", 5, true, "description")
var movie13 = new movie_2 ("Alice in Borderland","./img/Serie-Alice-in-Borderland-Netflix.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUq0aH_83uPoyI-XUOTJeYABGdOHPRd6dFTEjBQWYc8UTYM9RNTyiu9TDrBtxHtTdVrEB3DdovNp3tBNch0NcXBHEMjmYR97K4sK.jpg?r=e44", 5, true, "Un fanático de los videojuegos y sus dos amigos aparecen en una realidad paralela de Tokio, donde deben superar una serie de sádicos juegos para mantenerse con vida.")
var movie14 = new movie_2 ("Sexo y vida","./img/sexo-vida.jpg","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbL28ziKnsig4azG-iF4B__o_6U36JLfzAAl3_xpB3e3SOjcDZdWByVgNFXyBhiNi9sW9CxnzalQkJM2VI1yyTlqPIeoLFDYmwzD.jpg?r=c79", 5, true, "dCuando un ataque derriba a la alumna estrella de una selecta escuela de ballet, su sustituta se ve inmersa en un mundo de mentiras, traición... y competencia a muerte.")
var movie15 = new movie_2 ("Detention","./img/Serie-Netflix-Detention.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaNHi1HWpP-dl4AjlQWegWBzOtPln3HbWE0X3mycLilFpiVxYIvCJd8BBprVsz-2PofN4zWIxYk88St7ajD29SYCzc0FHr_VNuIk.jpg?r=424", 5, true, "description")
var movie16 = new movie_2 ("Delicadas y crueles","/img/serie-Delicadas-y-crueles-Netflix.png","https://occ-0-1668-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABddrICbGSJx1y8sViYrSS_YKYXgo0jT0cJZIx83SZHwQSHWqjxkoFoSrtVZ2Cglf53je02GZ1eEcKWt1QWk_LR2igJQXBJrVPfRX.jpg?r=a78", 5, true, "description")


const list = [movie1, movie2, movie3 , movie4, movie5, movie6, movie7, movie8]
const list2 = [movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16]

function showlist() {
    const container = document.getElementById("contenedor")
    for(let i = 0; i < list.length; i++) {
        const Movie = list[i]
        container.innerHTML += Movie.toHtml()
    }
}

showlist()

function showlist2() { const container = document.getElementById("contenedor2")
for(let i = 0; i < list2.length; i++) {
    const Movie = list2[i]
    container.innerHTML += Movie.toHtml()
}
}

showlist2()

