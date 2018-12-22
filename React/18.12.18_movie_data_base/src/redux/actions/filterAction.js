export function filteredByYears(data) {
    return {
       type: 'BY_YEAR', 
       data,
    }
}

export function filteredByBudget(data) {
    return {
       type: 'BY_BUDGET', 
       data,
    }
}

export function filteredByName(data) {
    return {
       type: 'BY_NAME', 
       data,
    }
}

export const clear = {
    type: 'CLEAR'
}