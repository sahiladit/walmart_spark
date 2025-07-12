import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Search, 
  ShoppingCart, 
  Send, 
  Bot, 
  User, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Trash2,
  Star,
  TrendingUp,
  Clock,
  Tag
} from 'lucide-react';

const AIAssistant = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [ocrFile, setOcrFile] = useState<File | null>(null);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: `Hello ${currentUser?.displayName || currentUser?.email?.split('@')[0] || 'there'}! I'm your Walmart AI Assistant. How can I help you find products or answer questions today?`,
      timestamp: new Date()
    }
  ]);
const handleOCRFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setOcrFile(file);

  // Stub: Replace this with actual OCR logic
  const fakeExtractedText = "iPhone 15"; // pretend we OCR'd this
  setSearchQuery(fakeExtractedText);
  performSearch(fakeExtractedText);
};

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 999.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Samsung 65" 4K TV',
      price: 799.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Nike Air Max Shoes',
      price: 129.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]);

  const allProducts = [
    {
      id: 101,
      name: 'Apple AirPods Pro (2nd Gen)',
      price: 199.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 102,
      name: 'Sony WH-1000XM4 Headphones',
      price: 249.99,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 103,
      name: 'MacBook Air M2',
      price: 1199.99,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 104,
      name: 'iPad Pro 12.9"',
      price: 899.99,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 105,
      name: 'Nike Air Max 270',
      price: 129.99,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Clothing & Shoes'
    },
    {
      id: 106,
      name: 'Instant Pot Duo 7-in-1',
      price: 89.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Home & Kitchen'
    },
    {
      id: 107,
      name: 'Samsung 65" 4K TV',
      price: 799.99,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 108,
      name: 'iPhone 15 Pro Max',
      price: 999.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Electronics'
    },
    {
      id: 109,
      name: 'Dyson V15 Detect Vacuum',
      price: 649.99,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Home & Kitchen'
    },
    {
      id: 110,
      name: 'LEGO Creator Expert Set',
      price: 369.99,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Toys & Games'
    }
  ];

  const popularSearches = [
    'iPhone 15', 'Samsung TV', 'Nike shoes', 'Instant pot', 
    'AirPods', 'Laptop', 'Groceries', 'Toys'
  ];

  const quickActions = [
    { icon: TrendingUp, label: 'Trending Products', color: 'bg-blue-500' },
    { icon: Clock, label: 'Recent Orders', color: 'bg-green-500' },
    { icon: Tag, label: 'Best Deals', color: 'bg-red-500' },
    { icon: Star, label: 'Top Rated', color: 'bg-yellow-500' }
  ];

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, 1);
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      id: chatHistory.length + 1,
      type: 'user',
      message: chatMessage,
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, newMessage]);
    setChatMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatHistory.length + 2,
        type: 'bot',
        message: `I found some great options for "${chatMessage}". I've updated the search results for you! You can also try searching for specific products using the search bar. Is there anything specific you'd like to know about these products?`,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, botResponse]);
      
      // Trigger a search based on the chat message
      performSearch(chatMessage);
    }, 1000);
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 500);
  };

  const handleSearch = () => {
    performSearch(searchQuery);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Real-time search as user types
    if (value.length > 2) {
      performSearch(value);
    } else if (value.length === 0) {
      setSearchResults([]);
    }
  };

  const handlePopularSearch = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    performSearch(searchTerm);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={`${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-800">AI Shopping Assistant</h1>
            </div>
            <div className="flex items-center space-x-1">
              <Bot className="text-blue-600" size={24} />
              <span className="text-sm text-gray-600">Powered by AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          
          {/* Left Section - AI Assistant Chat */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Bot className="mr-2 text-purple-600" size={20} />
              AI Chat Assistant
            </h2>
            
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {chat.type === 'bot' && <Bot size={16} className="mt-1 text-purple-600" />}
                      {chat.type === 'user' && <User size={16} className="mt-1" />}
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything about products..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={sendMessage}
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Right Section - Search and Cart */}
          <div className="space-y-6">
            
            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-md p-6 h-1/2 overflow-hidden">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="mr-2 text-blue-600" size={20} />
                Product Search
              </h2>
              
              {/* Search Input */}
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-14 bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  
                  <Search size={18} className="text-white" />
                </button>
                <div className="flex flex-col gap-2 mt-2">
  <label className="text-sm text-gray-600">Or upload an image/PDF for OCR search:</label>
  <input
    type="file"
    accept="image/*,application/pdf"
    onChange={handleOCRFileUpload}
    className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-lg text-sm"
  />
</div>

              </div>

              {/* Popular Searches */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearch(search)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-2 overflow-y-auto h-[calc(100%-200px)]">
                {isSearching ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600">Searching...</span>
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-800 line-clamp-1">{product.name}</h4>
                        <p className="text-xs text-gray-500">{product.category}</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-green-600 font-semibold text-sm">${product.price}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ))
                ) : searchQuery ? (
                  <div className="text-center py-8 text-gray-500">
                    <Search size={48} className="mx-auto mb-2 text-gray-300" />
                    <p>No products found for "{searchQuery}"</p>
                    <p className="text-sm">Try searching for something else</p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Search size={48} className="mx-auto mb-2 text-gray-300" />
                    <p>Start typing to search for products</p>
                    <p className="text-sm">Or click on popular searches above</p>
                  </div>
                )}
              </div>
            </div>

            {/* Cart Section */}
            <div className="bg-white rounded-lg shadow-md p-6 h-1/2 overflow-hidden">
              <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="mr-2 text-green-600" size={20} />
                  Shopping Cart ({cartItems.length})
                </div>
                <span className="text-lg font-bold text-green-600">${totalPrice.toFixed(2)}</span>
              </h2>
              
              <div className="space-y-3 overflow-y-auto h-[calc(100%-120px)]">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600 font-semibold">${item.price}</span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <ShoppingCart size={48} className="mx-auto mb-2 text-gray-300" />
                    <p>Your cart is empty</p>
                    <p className="text-sm">Start adding some items!</p>
                  </div>
                )}
              </div>
              
              <button 
                className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;