import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, Logo, TransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    DT Money
                </Logo>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <TransactionButton>Nova transação</TransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}