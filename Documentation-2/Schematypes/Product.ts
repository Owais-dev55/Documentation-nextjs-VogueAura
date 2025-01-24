export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'product_Id', type: 'number', title: 'Product Id' },
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'color', type: 'array', title: 'Product color' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'images', type: 'array', of: [{ type: 'image' }], 
      title: 'Product Images' },
      { name: 'reviews', type: 'array', of: [{type: 'reference', 
      to: [{type:   'review'}]}]}
      ]
      };
  