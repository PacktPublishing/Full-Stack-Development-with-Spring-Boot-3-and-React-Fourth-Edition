import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import Carlist from './components/Carlist';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({children } : { children: React.ReactNode }) => (
    <QueryClientProvider client = {
      queryClient}>{children}
    </QueryClientProvider>);

describe("Carlist tests", () => {
  test("component renders", () => {
    render(<Carlist />, { wrapper });
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  })

  test("Cars are fetched", async () => {
    render(<Carlist />, { wrapper });
    await waitFor(() => screen.getByText(/New Car/i));
    expect(screen.getByText(/Ford/i)).toBeInTheDocument();
  })

  test("Open new car modal", async () => {
    render(<Carlist />, { wrapper });
    await waitFor(() => screen.getByText(/New Car/i));
    await userEvent.click(screen.getByText(/New Car/i));
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  })  
});