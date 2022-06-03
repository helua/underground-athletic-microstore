import {
  LineItemsCount,
  LineItemsContainer,
} from "@commercelayer/react-components"
import { FC } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "components/ui/Container"
import { Header } from "components/ui/Header"
import { Logo } from "components/ui/Logo"

type Props = {
  logoUrl?: string
  companyName: string
  showCartIcon?: boolean
  cartUrl?: string
}

export const TopNav: FC<Props> = ({
  logoUrl,
  companyName,
  showCartIcon,
  cartUrl,
}) => {
  return (
    <Header>
      <Container>
        <Nav>
          <Logo logoUrl={logoUrl} companyName={companyName} />
          {showCartIcon ? (
            <a
              href={cartUrl}
              title={cartUrl ? "View cart" : "Your cart is empty"}
              className="relative"
              data-test-id="link-view-cart"
            >
              <CartIcon />
              <LineItemsContainer>
                <LineItemsCount>
                  {({ quantity }) =>
                    quantity ? (
                      <Badge data-test-id="cart-items-count">{quantity}</Badge>
                    ) : null
                  }
                </LineItemsCount>
              </LineItemsContainer>
            </a>
          ) : null}
        </Nav>
      </Container>
    </Header>
  )
}

const Nav = styled.div`
  ${tw`flex justify-between`}
`

const Badge = styled.div`
  ${tw`absolute px-2 py-1 leading-none rounded-full text-[10px] bg-primary text-contrast`}
  bottom: -4px;
  right: -6px;
`

const CartIcon = () => {
  return (
    <svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27 6.98H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1ZM4 10.98h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.98a5 5 0 0 1-10 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
