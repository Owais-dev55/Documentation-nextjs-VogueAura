export default {
    name: 'review',
    type: 'document',
    fields: [
        { name: 'review_id', type: 'string', title: 'Review ID' },
        { name: 'customer_id', type: 'string', title: 'Customer ID' },
        { name: 'customer_name', type: 'string', title: 'Customer Name' },
        { name: 'product_id', type: 'string', title: 'Product ID' }, 
        { name: 'product_name', type: 'string', title: 'Product Name' },
        { 
            name: 'rating', 
            type: 'number', 
            title: 'Rating',
            validation: Rule => Rule.min(1).max(5).error('Rating must be between 1 and 5')
        },
        { name: 'comment', type: 'text', title: 'Comment' },
        { name: 'created_at', type: 'datetime', title: 'Created At' }
    ]
}
