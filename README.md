# AI SaaS Application: Text-to-Image Generator

## Introduction
Welcome to the AI SaaS application repository! This project is a full-stack AI-powered text-to-image generator built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to generate stunning images from text inputs, leveraging AI technology, while maintaining a seamless and intuitive user experience.

## Features
### Core Features
- **User Authentication**: Secure login and signup functionality using JWT.
- **Credit Management**: Generate and download images using credits, with the ability to purchase additional credits via an integrated payment gateway.
- **Image Generation**: Powered by the ClipDrop API for high-quality image creation.

### Frontend Features
- Responsive UI built with React and Tailwind CSS.
- Dynamic routing implemented using React Router.
- Reusable components such as navbar, forms, and testimonials.
- Interactive animations created with Framer Motion.
- Intuitive homepage with hover effects and a clean design.
- Toast notifications for error handling and user feedback.

### Backend Features
- Express.js server configured with middleware for API handling.
- MongoDB Atlas database for secure storage of user and transaction data.
- APIs for managing user credits, image generation, and payment processing.
- Secure online payment integration and verification using Razorpay.

### Advanced Features
- **React Context**: Efficient state management for dynamic UI updates.
- **Local Storage**: Authentication persistence and credit management.
- **Seamless Integration**: Cohesive connection between frontend and backend functionalities.

## Non-Functional Requirements
- **Performance**: Handles up to 1,000 concurrent users with a response time under 2 seconds.
- **Scalability**: Supports horizontal scalability for future growth.
- **Usability**: Intuitive and accessible UI optimized for various devices.
- **Security**: Encrypted data transmission and secure payment processing via HTTPS.
- **Maintainability**: Modular design principles for easy updates and enhancements.
- **Reliability**: Guarantees 99.9% uptime.

## Implementation Strategy
### Frontend Development
- Initialize a React project with Tailwind CSS integration.
- Build reusable components like navbar, forms, and testimonial sections.
- Implement dynamic routing using React Router.
- Enhance user experience with animations powered by Framer Motion.

### Backend Development
- Set up an Express.js server with middleware for robust API handling.
- Configure MongoDB Atlas for user and transaction data management.
- Develop APIs for user authentication, credit management, and image generation.

### Integration
- Connect frontend forms and components to backend APIs.
- Implement Razorpay for secure payment processing and verification.
- Use toast notifications for error handling and user feedback.

### Testing and Deployment
- Test APIs and payment workflows using Postman.
- Deploy the frontend on **Vercel** and the backend on **Heroku** for high availability.

## Tech Stack
### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and efficient styling.
- **Framer Motion**: For interactive animations.
- **React Router**: For routing and navigation.
- **Axios**: For API calls.

### Backend
- **Node.js**: For server-side development.
- **Express.js**: For creating robust APIs.
- **MongoDB Atlas**: For secure database management.
- **JWT**: For secure user authentication.
- **Razorpay SDK**: For payment gateway integration.

### Development Tools
- **Postman**: For API testing.
- **VS Code**: Code editor.
- **Git/GitHub**: Version control.

### Deployment Platforms
- **OnRender.com**: Frontend & deployment.

## How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/UiPathkiit/AI-image-generation.git
   cd ai-image-genration
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   cd frontend
   ```
3. **Set Environment Variables**:
   - Create a `.env` file for both frontend and backend.
   - Add API keys and credentials (e.g., Razorpay, MongoDB, JWT secret).
4. **Start Development Servers**:
   - Backend:
     ```bash
     npm run start
     cd server
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```
5. **Build for Production**:
   ```bash
   cd frontend
   npm run build
   ```

## Contact
For any questions or inquiries, please feel free to reach out:
- **Email**: uipathcommunitykiit@gmail.com
- **Website**: [www.usckiit.in](https://www.usckiit.in)
- **GitHub**: [usckiit](https://github.com/UiPathkiit)
