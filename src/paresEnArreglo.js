const arrayIsEven = (array) => {
    if(Array.isArray(array))
    {
        for(i = 0; i < array.length; i++)
        {
            if(array[i] % 2 != 0)
            {
                return "NO";
            }
        }
        return "SI";
    }
    return undefined;
}

module.exports = 
{
    arrayIsEven
}