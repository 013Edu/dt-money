import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";

import { FaSearch } from "react-icons/fa"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

import { useContextSelector } from "use-context-selector"


const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const fetchTransactions = useContextSelector(TransactionContext, (context) => {
        return context.fetchTransactions;
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <FaSearch size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}

