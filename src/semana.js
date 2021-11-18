const weekDay = (n) => {
    while(n > 7)
    {
        n -= 7;
    }

    switch(n)
    {
        case 0:
            return undefined;
            break;

        case 1:
            return "DOMINGO";
            break;

        case 2:
            return "LUNES";
            break;

        case 3:
            return "MARTES";
            break;

        case 4:
            return "MIERCOLES";
            break;

        case 5:
            return "JUEVES";
            break;

        case 6:
            return "VIERNES";
            break;

        case 7:
            return "SABADO";
            break;
    }
}

module.exports = 
{
    weekDay
}