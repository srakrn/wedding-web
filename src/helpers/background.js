/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const N_IMAGES = 5;

const rand = randomIntFromInterval(1, N_IMAGES)

export const background_image_name = `bg_${rand}.jpg`