import React from 'react';
import {render as reactRender} from '@testing-library/react';
import Phone from '../components/Phone';
import {MemoryRouter} from 'react-router-dom';

test('check if the link created for to the phone details using the id is correct', async () => {
  let phone_to_check = validPhone();
  phone_to_check.id = 213;
  const { getByRole } = render(<Phone phone={phone_to_check} />);
  const link = getByRole('link');
  expect(link.href).toBe(`http://localhost/phone/213`);
});

function validPhone() {
  return {
    id: 1,
    name: 'iPhone 12',
    price: '1200',
    imageLink: 'htpp://www.ilyes.com/image-iphone12.jpg',
    manufacturer: 'Apple'
  };
}

function render(component) {
  return reactRender(<MemoryRouter>{component}</MemoryRouter>);
}
