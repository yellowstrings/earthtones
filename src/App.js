import React from "react";
import Header from "./components/header"
import YoutubeEmbed from "./components/video";

import './index.css'

import { colorTheme } from './utils/theme'

export default function App() {


  return (
    <div>
      <Header />
      <YoutubeEmbed />
    </div>

  );
}