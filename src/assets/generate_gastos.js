var d = new Date();
const data = [
    {
        date: '22',
        day: 'sexta',
        expenses:[
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
                price: '26,00',
                active: true,
                refundable: true,
            },
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
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
                price: '26,00',
                active: false,
                refundable: false,
            },
            {
                title: 'Almoço restaurante',
                category: 'Alimentação',
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
                price: '26,00',
                active: true,
                refundable: false,
            }
        ]
    }
]

export default data