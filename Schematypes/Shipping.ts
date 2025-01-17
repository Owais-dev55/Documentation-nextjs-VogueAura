export default {
    name: "shipping",
    type: "document",
    fields: [
      { name: "shipping_id", type: "string", title: "Shipping ID" },
      { name: "order_id", type: "string", title: "Order ID" },
      { name: "tracking_id", type: "string", title: "Tracking ID" }, 
      { name: "shipping_address", type: "string", title: "Shipping Address" },
      { name: "carrier", type: "string", title: "Courier Service" },
      { name: "shipping_date", type: "date", title: "Shipping Date" },
      {
        name: "shipping_status",
        type: "string",
        title: "Shipping Status",
        options: {
          list: [
            { title: "In Transit", value: "In Transit" },
            { title: "Delivered", value: "Delivered" },
            { title: "Delayed", value: "Delayed" }
          ],
        },
      },
    ],
  };
  