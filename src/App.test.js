import { render, screen } from '@testing-library/react';
import App from './App';
import MainContainer from "./containers/maincontainer/MainContainer"
import ErrorPage from "./containers/errors/ErrorPage"

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


test('renders error message',()=>{
  render(<ErrorPage/>);
  const textElement=screen.getByText(/This result has returned an error/i);
  expect(textElement).toBeInTheDocument();
})
