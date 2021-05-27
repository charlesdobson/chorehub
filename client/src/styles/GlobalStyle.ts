import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --font-family-primary: 'Montserrat';
    --font-family-secondary: 'Lato', sans-serif;

    --border-radius: 32px;
    
    --gray-1: #F9FAFB;
    --gray-2: #F3F4F6;
    --gray-3: #E2E8F0;
    --gray-4: #D1D5DB;
    --gray-5: #9CA3AF;
    --gray-6: #6B7280;
    --gray-7: #4B5563;
    --gray-8: #374151;
    --gray-9: #1F2937;
    --gray-10: #111827;
  }

`;

export default GlobalStyle;
