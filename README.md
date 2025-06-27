# IGen - AI Image Generation App

A modern Next.js application that generates images from text prompts using AI technology. Built with React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **AI-Powered Image Generation**: Generate stunning images from text descriptions
- **Interactive Gallery**: View and manage your generated images
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application
- **Image History**: Keep track of all your generated images with their prompts

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Frontend**: React 19
- **Linting**: ESLint
- **API**: RapidAPI ChatGPT-42 Text-to-Image service

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager
- A RapidAPI account and API key for the ChatGPT-42 service

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/alx-project-0x07.git
cd alx-project-0x07
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your API credentials:

```env
NEXT_PUBLIC_GPT_API_KEY=your_rapidapi_key_here
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── components/
│   ├── common/
│   │   └── ImageCard.tsx      # Reusable image display component
│   └── layouts/
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Footer component
│       └── Layout.tsx         # Main layout wrapper
├── hooks/
│   └── useFetchData.ts        # Custom hook for API calls
├── interfaces/
│   └── index.ts               # TypeScript type definitions
├── constants/
│   └── index.ts               # Application constants
├── pages/
│   ├── api/
│   │   ├── generate-image.ts  # Image generation API endpoint
│   │   └── hello.ts           # Sample API route
│   ├── _app.tsx               # App component wrapper
│   ├── _document.tsx          # Custom document
│   └── index.tsx              # Home page
├── styles/
│   └── globals.css            # Global styles
└── public/                    # Static assets
```

## 🎯 How to Use

1. **Enter a Prompt**: Type a descriptive text prompt in the input field
2. **Generate Image**: Click the "Generate Image" button to create your image
3. **View Results**: Your generated image will appear below with the original prompt
4. **Browse History**: All generated images are stored in the gallery section
5. **Reuse Images**: Click on any image in the gallery to view it in full size

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying the Tailwind configuration in `tailwind.config.js`
- Updating component styles in individual `.tsx` files
- Adding custom CSS in `styles/globals.css`

### API Configuration
To use a different image generation service:
1. Update the API endpoint in `pages/api/generate-image.ts`
2. Modify the request format and response handling
3. Update environment variables accordingly

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy with a single click

### Deploy on Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://your-app-url.vercel.app)
- [Documentation](https://nextjs.org/docs)
- [RapidAPI ChatGPT-42](https://rapidapi.com/gpt-42/api/chatgpt-42/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/alx-project-0x07/issues) page
2. Create a new issue if your problem isn't already addressed
3. Provide detailed information about the error and steps to reproduce

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [RapidAPI](https://rapidapi.com/) for providing the image generation API
- [Vercel](https://vercel.com/) for seamless deployment

---

**Made with ❤️ by LUKE**
