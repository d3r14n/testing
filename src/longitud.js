const stringLength = (s) => {
    if(typeof s != 'string')
    {
        String(s);
    }
    
    return s.length;
}

module.exports = 
{
    stringLength
}