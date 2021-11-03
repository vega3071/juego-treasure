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
        return "Uff.. como Quema!";
    } else if (distance < 70) {
        return "Hay olor a Quemado...";
    } else if (distance < 120) {
        return "Es idea mia o se está poniendo más Caluroso?";
    } else if (distance < 200) {
        return "Ambiente Cálido y agradable";
    } else if (distance < 300) {
        return "Frío, pero podría ser peor";
    } else if (distance < 500) {
        return "Muy Frío, debí traer calzoncillos largos";
    } else if (distance <800) {
        return "Congelado hasta los mocos!";
    }
}