import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import stores from './stores'; // point to your Redux store
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider stores={stores}>
      <App />
    </Provider>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
