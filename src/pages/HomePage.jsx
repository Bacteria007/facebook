import React from "react";

const posts = [
  {
    id: 1,
    title: "Exploring Nature",
    description: "Discover the beauty of the great outdoors.",
    image: "https://via.placeholder.com/300x200?text=Nature",
  },
  {
    id: 2,
    title: "City Lights",
    description: "Experience the hustle and bustle of urban life.",
    image: "https://via.placeholder.com/300x200?text=City+Lights",
  },
  {
    id: 3,
    title: "Culinary Adventures",
    description: "Savor the flavors of world cuisine.",
    image: "https://via.placeholder.com/300x200?text=Food",
  },
  {
    id: 4,
    title: "Tech Innovations",
    description: "Stay updated with the latest in technology.",
    image: "https://via.placeholder.com/300x200?text=Tech",
  },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-blue-500">Home</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 mt-20"
          >
            <h2 className="text-lg font-semibold text-gray-700">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-md object-cover mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
