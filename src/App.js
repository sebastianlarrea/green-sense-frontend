import { RouterProvider, } from "react-router-dom";
import router from './routes';
import './styles/globals.css';
import './App.scss'

import "toastify-js/src/toastify.css"

export default function App() {
  return <RouterProvider router={router} />
}