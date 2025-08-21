import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

// Minimal mock reducer for cart
const mockCartReducer = (state = { products: [] }, action) => state;

// Configure store with mock cart slice
const store = configureStore({
  reducer: {
    cart: mockCartReducer,
  },
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
