/** * @jest-environment jsdom */
import { Summary } from ".."
import { defaultTheme } from "../../../styles/theme/default"
import { ThemeProvider } from "styled-components"
import { render } from "@testing-library/react";

describe('Summary', () => {
    test('if component renders correctly', () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <Summary/>
            </ThemeProvider>
        )
    })
})