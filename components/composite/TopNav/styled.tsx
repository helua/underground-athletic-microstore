import styled from "styled-components"
import tw from "twin.macro"

export const Nav = styled.div`
  ${tw`flex justify-between`}
`

export const CartLink = styled.a``

export const Badge = styled.div`
  ${tw`absolute px-2 py-1 leading-none rounded-full text-[10px] bg-primary text-contrast`}
  bottom: -4px;
  right: -6px;
`
