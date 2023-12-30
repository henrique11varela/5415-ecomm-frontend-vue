export default {
    get,
    set
}

/**
 * 
 * @param {string} key 
 * @returns {json} json 
 */
function get(key){
    console.log(JSON.parse(localStorage.getItem(key)) || []);
    return JSON.parse(localStorage.getItem(key)) || []
}

/**
 * 
 * @param {string} key 
 * @param {json} value 
 */
function set(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}