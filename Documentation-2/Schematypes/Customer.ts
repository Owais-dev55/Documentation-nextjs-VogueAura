export default {
    name: 'customer',
    type: 'document',
    fields: [
        { name: 'customer_id', type: 'string', title: 'Customer ID' },
        { name: 'customer_name', type: 'string', title: 'Customer Name' },
        { name: 'customer_email', type: 'string', title: 'Customer Email' },
        { name: 'customer_phone', type: 'string', title: 'Customer Phone' },
        { 
            name: 'customer_address', 
            type: 'array', 
            title: 'Customer Address',
            of: [{ 
                type: 'object',
                fields: [
                    { name: 'street', type: 'string', title: 'Street' },
                    { name: 'city', type: 'string', title: 'City' },
                    { name: 'state', type: 'string', title: 'State' },
                    { name: 'zip', type: 'string', title: 'ZIP Code' }
                ]
            }]
        }
    ]
}
