export default {
  name: "order",
  type: "document",
  fields: [
    { name: "order_id", type: "string", title: "Order ID" },
    { name: "customer_id", type: "string", title: "Customer ID" },
    { name: "product_id", type: "number", title: "Product ID" },
    { name: "quantity", type: "number", title: "Quantity" },
    { name: "total_price", type: "number", title: "Total Price" },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: [
          { title: "Pending", value: "Pending" },
          { title: "Shipped", value: "Shipped" },
          { title: "Delivered", value: "Delivered" },
          { title: "Return", value: "Return" },
        ],
      },
    },
    {
      name: "payment_status",
      type: "string",
      title: "Payment Status",
      options: {
        list: [
          { title: "Paid", value: "Paid" },
          { title: "Unpaid", value: "Unpaid" },
          { title: "Refund", value: "Refund" },
        ],
      },
    },
  ],
};
