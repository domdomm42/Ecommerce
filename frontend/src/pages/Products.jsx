function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
