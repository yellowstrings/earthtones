import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

export default function Header () {

  return (
    <div>

      <Button
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

