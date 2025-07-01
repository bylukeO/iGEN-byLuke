// pages/gallery.tsx
import { useState, useEffect } from 'react';
import ImageCard from '@/components/common/ImageCard';
import { ImageProps } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedPrompt, setSelectedPrompt] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredImages, setFilteredImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    // Load images from localStorage on component mount
    const storedImages = localStorage.getItem('generatedImages');
    if (storedImages) {
      const parsedImages = JSON.parse(storedImages);
      setImages(parsedImages);
      setFilteredImages(parsedImages);
    }
  }, []);

  useEffect(() => {
    // Filter images based on search term
    if (searchTerm.trim() === '') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(image =>
        image.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [searchTerm, images]);

  const handleImageClick = (imageUrl: string, prompt: string) => {
    setSelectedImage(imageUrl);
    setSelectedPrompt(prompt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    setSelectedPrompt('');
  };

  const clearGallery = () => {
    if (window.confirm('Are you sure you want to clear all images? This action cannot be undone.')) {
      localStorage.removeItem('generatedImages');
      setImages([]);
      setFilteredImages([]);
    }
  };

  const downloadImage = async (imageUrl: string, prompt: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `generated-image-${prompt.slice(0, 20).replace(/[^a-z0-9]/gi, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Image Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through all your AI-generated masterpieces. Search, view, and download your favorite images.
          </p>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by prompt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearGallery}
              disabled={images.length === 0}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200"
            >
              Clear Gallery
            </button>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
              {filteredImages.length} of {images.length} images
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="relative group">
                <ImageCard
                  imageUrl={image.imageUrl}
                  prompt={image.prompt}
                  action={() => handleImageClick(image.imageUrl, image.prompt)}
                  width="w-full"
                  height="h-64"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(image.imageUrl, image.prompt);
                  }}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
                  title="Download Image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Images Yet</h2>
            <p className="text-gray-500 mb-6">
              Start generating some amazing images to see them here!
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Generate Your First Image
            </Link>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Results Found</h2>
            <p className="text-gray-500">
              Try adjusting your search term to find what you&apos;re looking for.
            </p>
          </div>
        )}

        {/* Modal for full-size image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Generated Image</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <Image
                src={selectedImage}
                alt={selectedPrompt}
                width={800}
                height={600}
                className="w-full h-auto max-h-96 object-contain rounded-lg"
              />
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Prompt:</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedPrompt}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => downloadImage(selectedImage, selectedPrompt)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Download Image
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;