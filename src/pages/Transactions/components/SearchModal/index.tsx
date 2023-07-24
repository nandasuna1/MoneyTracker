import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchFormModal() {
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por uma transação"/>

            <button>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}