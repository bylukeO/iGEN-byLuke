// hooks/useFetchData.ts
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const useFetchData = <T, R extends { prompt: string }>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  const fetchData = async (endpoint: string, body: R) => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!resp.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await resp.json()
      setResponseData(result)
      
      // Create new image object
      const newImage: ImageProps = { 
        imageUrl: result?.message, 
        prompt: body?.prompt 
      };
      
      // Update state
      setGeneratedImages((prev) => [...prev, newImage]);
      
      // Save to localStorage
      const existingImages = localStorage.getItem('generatedImages');
      const currentImages: ImageProps[] = existingImages ? JSON.parse(existingImages) : [];
      const updatedImages = [...currentImages, newImage];
      localStorage.setItem('generatedImages', JSON.stringify(updatedImages));
      
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    responseData,
    error,
    fetchData,
    generatedImages
  }
}

export default useFetchData;