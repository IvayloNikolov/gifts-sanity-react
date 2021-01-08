export default {
    name: 'gift',
    title: 'Gift',
    type: 'document',
    fields: [
        {
            name: 'Name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'Image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'Shop',
            title: 'Shop',
            type: 'string'
        },
        {
            name: 'Description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'Link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'GiftPost',
            title: 'Gift post',
            type: 'reference',
            to: {type: 'post'},
          },
    ]
}