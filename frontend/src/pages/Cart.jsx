function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 149.99, quantity: 2 },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16 border rounded px-2 py-1"
                  />
                  <button className="text-red-500">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
