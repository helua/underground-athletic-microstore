import { ReactNode } from "react"

import { Wrapper } from "./styled"

interface Props {
  children: ReactNode
}

export function Base({ children }: Props): JSX.Element {
  return <Wrapper>{children}</Wrapper>
}
