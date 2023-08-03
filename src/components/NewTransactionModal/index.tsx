
import * as Dialog from "@radix-ui/react-dialog"
import { ButtonRegister, CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"

import { IoMdClose } from "react-icons/io"
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa"

export function NewTransactionModal() {
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

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <FaArrowAltCircleUp size={23} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <FaArrowAltCircleDown size={23} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <ButtonRegister type="submit">
                        Cadastrar
                    </ButtonRegister>
                </form>

            </Content>
        </Dialog.Portal>
    )
}