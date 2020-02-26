export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 300
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 350
        },
    ];

    getBooks() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}