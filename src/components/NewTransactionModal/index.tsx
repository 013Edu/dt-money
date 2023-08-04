
import * as Dialog from "@radix-ui/react-dialog"
import { ButtonRegister, CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"

import { IoMdClose } from "react-icons/io"
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa"

import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { TransactionContext } from "../../contexts/TransactionsContext"

import { useContextSelector } from "use-context-selector"

const newTransactionFormSchema = z.object({
    descriptions: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

    const createTransaction = useContextSelector(TransactionContext, (context) => {
        return context.createTransaction;
    })

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { descriptions, category, price, type } = data;

        await createTransaction({
            descriptions,
            category,
            price,
            type
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <Dialog.Close asChild>
                    <CloseButton>
                        <IoMdClose size={23} />
                    </CloseButton>
                </Dialog.Close>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('descriptions')}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <FaArrowAltCircleUp size={23} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <FaArrowAltCircleDown size={23} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <ButtonRegister type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </ButtonRegister>
                </form>

            </Content>
        </Dialog.Portal>
    )
}