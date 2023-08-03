import { SearchFormContainer } from "./styles";

import { FaSearch } from "react-icons/fa"

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />
            <button type="submit">
                <FaSearch size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}