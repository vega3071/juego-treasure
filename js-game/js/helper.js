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
    } else if (distance < 70) {
        return "Algo se Quema...";
    } else if (distance < 120) {
        return "Se está poniendo más Caluroso?";
    } else if (distance < 200) {
        return "Ambiente Cálido";
    } else if (distance < 300) {
        return "Frío, pero podría ser peor";
    } else if (distance < 500) {
        return "Súper Frío, debí traer calzoncillos largos";
    } else if (distance <800) {
        return "Congelado hasta los mocos!";
    }
}
