import { render, screen } from '@testing-library/react';
import App from './App';
import MainContainer from "./containers/maincontainer/MainContainer"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders top 40 text',()=>{
  render(<MainContainer/>);
  const textElement=screen.getByText(/Top 40/i);
  expect(textElement).toBeInTheDocument();
})
