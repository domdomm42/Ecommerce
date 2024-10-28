import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://via.placeholder.com/400" alt="Product" className="w-full" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Name</h1>
          <p className="text-2xl text-gray-600 mb-4">$99.99</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
