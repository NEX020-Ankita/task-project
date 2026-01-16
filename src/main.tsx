import { createRoot } from 'react-dom/client'
import App from '../page.tsx'
import './index.css'

createRoot(document.getElementById('app')!).render(<App />)
