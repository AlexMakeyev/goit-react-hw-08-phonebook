import React from 'react';
import { PhoneBook } from '../../components/PhoneBook/PhoneBook';
import { Background } from './MyPhoneBookPage.styled';
export default function MyPhoneBookPage() {
  return (
    <Background>
      <PhoneBook />
    </Background>
  );
}
