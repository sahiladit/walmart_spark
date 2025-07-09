import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m your Walmart AI Assistant. How can I help you find products or answer questions today?',
      timestamp: new Date()
    }
  ]);

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
        message: `I can help you with "${chatMessage}". Let me search our inventory and find the best options for you. Would you like me to show you similar products or help you with something else?`,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
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
          
          {/* Left Section - Search */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Search className="mr-2 text-blue-600" size={20} />
              Product Search
            </h2>
            
            {/* Search Input */}
            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Search size={18} className="text-white" />
              </button>
            </div>

            {/* Popular Searches */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`${action.color} p-2 rounded-full`}>
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section - Cart and Chat */}
          <div className="space-y-6">
            
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
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-800 line-clamp-1">{item.name}</h4>
                      <p className="text-green-600 font-semibold">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>

            {/* Chat Section */}
            <div className="bg-white rounded-lg shadow-md p-6 h-1/2 flex flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;