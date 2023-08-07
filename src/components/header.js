import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

import "../index.css"

// import { colorTheme } from '../utils/theme'

export default function Header () {

  return (
    <div >
      <Button
      className="headerButtons"
      variant="contained"
      onClick={() => {alert('clicked')}}

      >
        about
      </Button>
      <Button
        variant="contained"
        onClick={() => {alert('clicked')}}
        >
        tech
      </Button>
      <Button
        variant="contained"
        onClick={() => {alert('clicked')}}
      >
        tour
        </Button>
      <Button
      variant="contained"
      onClick={() => {alert('clicked')}}
      >
        contact
      </Button>
    </div>
  )
}