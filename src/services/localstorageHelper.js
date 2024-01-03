export default {
    get,
    set
}

/**
 * Gets JSON data stored locally
 * @param {string} key 
 * @returns {json} json 
 */
function get(key){
    return JSON.parse(localStorage.getItem(key)) || []
}

/**
 * Stores locally JSON data
 * @param {string} key 
 * @param {json} value 
 */
function set(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}