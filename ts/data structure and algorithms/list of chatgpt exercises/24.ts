// Remover valores falsy de um array

// quais são os valores falsy em js?
// false, 0, '', null, undefined, NaN, -0, 0n

const falsyValues: unknown[] = [0, 'ola', '', null, 'mundo', undefined, false, NaN, -0]

const checkFalsyValues = (values: unknown[]): unknown[] => {
    return values.filter((value) => value !== false && value !== 0 && value !== '' && value !== null && value !== undefined && !Number.isNaN(value) && value !== -0)
}

console.log(checkFalsyValues(falsyValues))