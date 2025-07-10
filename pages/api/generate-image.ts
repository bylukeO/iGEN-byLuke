import { HEIGHT, WIDTH } from "@/constants";
import { RequestProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const rapidApiKey = process.env.RAPIDAPI_KEY || "41cbd06dbcmsh198f5ea39a1323dp16017fjsn5845d6b5a6ab";
  const chatgptUrl = "https://chatgpt-42.p.rapidapi.com/texttoimage3";

  try {
    const { prompt }: RequestProps = request.body;

    console.log("Sending request to ChatGPT Image Generator with prompt:", prompt);

    const res = await fetch(chatgptUrl, {
      method: "POST",
      headers: {
        'X-Rapidapi-Key': rapidApiKey,
        'X-Rapidapi-Host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: prompt,
        width: WIDTH,
        height: HEIGHT,
        steps: 1
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("ChatGPT Image Generator API error:", errorData);
      throw new Error(`ChatGPT Image Generator API request failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("ChatGPT Image Generator API response:", JSON.stringify(data, null, 2));

    // Handle ChatGPT's response structure
    const generatedImageUrl = data?.generated_image || 
                             data?.url ||
                             data?.imageUrl ||
                             "https://via.placeholder.com/600x400?text=Generated+Image";

    console.log("Final image URL:", generatedImageUrl);

    return response.status(200).json({
      message: generatedImageUrl,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error in ChatGPT Image Generator API route:", errorMessage, error);
    return response.status(500).json({ 
      error: errorMessage || "Internal server error" 
    });
  }
}

export default handler
