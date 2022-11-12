import React from 'react';
import ButtonAppBar from 'components/ButtonAppBar/ButtonAppBar';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <ButtonAppBar />
      <Outlet />
      <footer>Copyright 2022 &copy;</footer>
    </div>
  );
}
