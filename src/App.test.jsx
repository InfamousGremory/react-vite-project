import { describe, expect, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './setupTests';
describe('App', () => {
  it('should render while authenticating', () => {
    render(<App />);

    expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
  });
});