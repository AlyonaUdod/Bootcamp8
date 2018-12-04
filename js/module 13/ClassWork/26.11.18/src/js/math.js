function sum (...args) {
    return args.reduce((acc,el)=> acc+el,0)
}

// export 
function substr (...args) {
    return args.reduce((acc,el)=> acc-el)
}

function pow (a,b) {
    return Math.pow(a,b)
}

// или export перед самой функцией 

export {sum, substr};
export default pow; // только один эксопрт на .js файл. и максимум одна функция. 