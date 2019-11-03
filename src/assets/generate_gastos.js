const data = [
    {
        date: '22',
        day: 'sexta',
        expenses:[
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                place: 'Contele Filial de Santos - SP',
                image: require('../assets/img_gasto.png'),
                price: '26,00',
                active: true,
                refundable: true,
            },
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                place: 'Contele Filial de Santos - SP',
                image: require('../assets/img_gasto.png'),
                price: '326,00',
                active: true,
                refundable: true,
            }
        ]
    },
    {
        date: '20',
        day: 'quarta',
        expenses:[
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                place: 'Contele Filial de Santos - SP',
                image: require('../assets/img_gasto.png'),
                price: '26,00',
                active: false,
                refundable: true,
            },
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                place: 'Contele Filial de Santos - SP',
                image: require('../assets/img_gasto.png'),
                price: '26,00',
                active: true,
                refundable: true,
            }
        ]
    },
    {
        date: '14',
        day: 'segunda',
        expenses:[
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                place: 'Contele Filial de Santos - SP',
                image: require('../assets/img_gasto.png'),
                price: '26,00',
                active: true,
                refundable: false,
            }
        ]
    }
]

export default data