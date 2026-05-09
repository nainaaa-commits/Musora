**Musora Onboarding Flow**

Live Demo: [View Project on Vercel](https://musora.vercel.app/)

A high-fidelity, responsive onboarding experience built with React, Tailwind CSS v4.

🏗 **Architecture & Design Decisions**

**Component Composition**: Leveraged a shell-and-slot pattern for the StepLayout to ensure a persistent global UI (progress bar, navigation) while keeping step-specific logic decoupled and modular.

**State-Driven Navigation**: Optimized for performance and fluid UX by managing flow via client-side state, providing an "app-like" feel with instantaneous transitions.

**Refined UX/UI**: Integrated Montserrat and Inter typography for brand alignment, featuring custom-built accessible inputs and a non-mandatory marketing consent flow.

🛠 **Future Improvements & Roadmap**
The following features are planned for the next phase:

**Unit Testing**: Implement Jest for core utility functions (like email validation logic).

**E2E Testing**: Add Cypress flows to ensure the multi-step onboarding remains break-proof during styling updates.



🚀 Getting Started

npm install

npm run dev
