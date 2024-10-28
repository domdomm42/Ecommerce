function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopName</h1>
        <p className="text-gray-600">Discover our amazing products</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">New Arrivals</h2>
          <p className="text-gray-600">Check out our latest products</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Best Sellers</h2>
          <p className="text-gray-600">Our most popular items</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Special Offers</h2>
          <p className="text-gray-600">Limited time deals</p>
        </div>
      </div>
    </div>
  )
}

export default Home
