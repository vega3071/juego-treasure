let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

let getDistanceHint = distance => {
    if (distance < 50) {
        return "Fuego! Fuego!";
    } else if (distance < 90) {
        return "Algo se Quema...?";
    } else if (distance < 160) {
        return "Suben las temperaturas, Playa!";
    } else if (distance < 250) {
        return "Templado... ni fú, ni fá.";
    } else if (distance < 360) {
        return "Fresquito por la mañana.";
    } else if (distance < 560) {
        return "Debí traer calzoncillos largos.";
    } else if (distance < 1000) {
        return "Congelado hasta los mocos!!";
    }
}
