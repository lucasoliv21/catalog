
interface OrderItem {
  title: string;
  quantity: number;
  price: number;
}

export function createWhatsAppMessage(cart: OrderItem[]): string {
  const items = cart
    .map(item => `- ${item.title} - (${item.quantity} unidades) - R$ ${item.price * item.quantity}`)
    .join('%0A');

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return `Olá, gostaria de fazer um pedido com os seguintes itens:%0A${items}
  %0A----------------------%0A
  *Total: R$ ${total.toFixed(2)}*
  %0A----------------------%0A
  `;
}