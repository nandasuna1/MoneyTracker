/** * @jest-environment jsdom */
import { render } from "@testing-library/react"
import { defaultTheme } from "../../../styles/theme/default"
import { ThemeProvider } from "styled-components"
import { NewTransactionModal } from ".."
import * as Dialog  from "@radix-ui/react-dialog";

describe('NewTransactionModal', () => {
    test('if componentRenders correctly', () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <Dialog.Root>
                    <NewTransactionModal />
                </Dialog.Root>
            </ThemeProvider>
        )
    })
})