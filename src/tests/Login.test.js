import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa a página de Login', () => {

  it('Checa se o logo do Trybetunes está renderizando corretamente', () => {
    render(<App />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveAttribute('alt', 'logo trybetunes');
  });

  it('Checa se o botão "entrar" é habilitado quando as informações são preenchidas corretamente', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Entrar/i });

    expect(button).toBeDisabled();

    const emailInput = screen.getByPlaceholderText(/Digite seu e-mail/i); 
    const passwordInput = screen.getByPlaceholderText(/Digite sua senha/i);
    const userEmail = 'user@email.com';
    const userPassword = '123456';
    
    userEvent.type(emailInput, userEmail);
    userEvent.type(passwordInput, userPassword);

    expect(button).toBeEnabled();
  });

  it('Checa se ao clicar em "entrar", a aplicação é redirecionada para a página "search"', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Entrar/i });

    const emailInput = screen.getByPlaceholderText(/Digite seu e-mail/i); 
    const passwordInput = screen.getByPlaceholderText(/Digite sua senha/i);
    const userEmail = 'user@email.com';
    const userPassword = '123456';
    
    userEvent.type(emailInput, userEmail);
    userEvent.type(passwordInput, userPassword);
    userEvent.click(button);

    const searchBtn = screen.getByRole('button', { name: /Pesquisar/i });
    expect(searchBtn).toBeInTheDocument();
  });
});
