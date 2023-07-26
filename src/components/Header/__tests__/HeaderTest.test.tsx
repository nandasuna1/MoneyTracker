/** * @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, fireEvent, getByText, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from ".."
import { defaultTheme } from "../../../styles/theme/default"
import { ThemeProvider } from "styled-components"

describe('Header', () => {
    test('if component renders correctly', () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <Header/>
            </ThemeProvider>
        )
    })

    test('if onClick button opens modal', () => {
        // study better how does it works with portals
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Header/>
            </ThemeProvider>
        )            
        void userEvent.click(screen.getByRole("button", {name: 'Nova transação'}))
        // act(() => {
            const modalElement = screen.getAllByRole('input')
            expect(modalElement).toBeInTheDocument();
        // })
    })
})