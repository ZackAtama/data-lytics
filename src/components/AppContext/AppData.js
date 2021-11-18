
// image imports
import confirmed from '../../assets/icons/confirmed.png'
import recovered from '../../assets/icons/recovered.png'
import vaccinated from '../../assets/icons/vaccinated.png'
import active from '../../assets/icons/active.png'

import flag_burundi from '../../assets/countries/flag_burundi.jpg'
import flag_kenya from '../../assets/countries/flag_kenya.jpg'
import flag_rwanda from '../../assets/countries/flag_rwanda.jpg'
import flag_tanzania from '../../assets/countries/flag_tanzania.jpg'
import flag_uganda from '../../assets/countries/flag_uganda.jpg'

export const CountriesCovidData = [
    {
        flag: flag_burundi,
        name: 'Burundi',
        confirmed: 2538842,
        active: 1207516,
        vaccinated: 2478967,
        recovered: 1331326
    },
    {
        flag: flag_kenya,
        name: 'Kenya',
        confirmed: 6446820,
        active: 2054434,
        vaccinated: 2814491,
        recovered: 4392386
    },
    {
        flag: flag_rwanda,
        name: 'Rwanda',
        confirmed: 1608745,
        active: 1314509,
        vaccinated: 105559,
        recovered: 294236
    },
    {
        flag: flag_tanzania,
        name: 'Tanzania',
        confirmed: 2918553,
        active: 2771658,
        vaccinated: 1231288,
        recovered: 146895
    },
    {
        flag: flag_uganda,
        name: 'Uganda',
        confirmed: 1454409,
        active: 394825,
        vaccinated: 3656907,
        recovered: 1059584
    }
]

export const EACovidData = {
    confirmed: CountriesCovidData.reduce((accumulator, current) => accumulator + current.confirmed, 0),
    active: CountriesCovidData.reduce((accumulator, current) => accumulator + current.active, 0),
    recovered: CountriesCovidData.reduce((accumulator, current) => accumulator + current.recovered, 0),
    vaccinated: CountriesCovidData.reduce((accumulator, current) => accumulator + current.vaccinated, 0)
}

export const WorldCovidData = {    
    confirmed: 169567399,
    active: 38139064,
    recovered: 131428335,
    vaccinated: 3087097595
}

export const CovidData = [
    {
        icon: confirmed,
        name: 'Confirmed',
        numbers: EACovidData.confirmed,
        percentage: ((EACovidData.confirmed*100)/WorldCovidData.confirmed).toFixed(2)
    },
    {
        icon: active,
        name: 'Active',
        numbers: EACovidData.active,
        percentage: ((EACovidData.active*100)/WorldCovidData.active).toFixed(2)
    },
    {
        icon: recovered,
        name: 'Recovered',
        numbers: EACovidData.recovered,
        percentage: ((EACovidData.recovered*100)/WorldCovidData.recovered).toFixed(2)
    },
    {
        icon: vaccinated,
        name: 'Vaccinated',
        numbers: EACovidData.vaccinated,
        percentage: ((EACovidData.vaccinated*100)/WorldCovidData.vaccinated).toFixed(2)
    }
]
