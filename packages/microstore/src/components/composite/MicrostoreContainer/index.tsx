import { CommerceLayer } from "@commercelayer/react-components/auth/CommerceLayer"
import { useOrderContainer } from "@commercelayer/react-components/hooks/useOrderContainer"
import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { OrderStorage } from "@commercelayer/react-components/orders/OrderStorage"
import { GlobalStylesProvider } from "@commercelayer/react-utils"
import { ReactNode, useEffect } from "react"
import { useTranslation } from "react-i18next"

import { MicrostoreHead } from "#components/composite/MicrostoreHead"
import { TopNav } from "#components/composite/TopNav"
import { Base } from "#components/ui/Base"
import { Container } from "#components/ui/Container"
import { Footer } from "#components/ui/Footer"
import { useDataFromUrl } from "#hooks/useDataFromUrl"


interface Props {
  settings: Settings
  couponCode?: string
  children: ReactNode
}

function MicrostoreContainer({
  settings,
  couponCode,
  children,
}: Props): JSX.Element {
  const { cart, lang, inline } = useDataFromUrl()
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const returnUrl = window.location.href
  // eslint-disable-next-line prettier/prettier 

  const orderId = window.localStorage.getItem("orderId");
  console.log(orderId);

  return (
    <CommerceLayer
      accessToken={settings.accessToken}
      endpoint={settings.endpoint}
    >
      <GlobalStylesProvider primaryColor={settings.primaryColor} />
      <OrderStorage persistKey={`cl:${settings.slug}:orderId`}>
        <OrderContainer
          fetchOrder={(order) => console.log(order)}
          attributes={{
            language_code: lang,
            coupon_code: couponCode,
            return_url: returnUrl,
            // cart_url: cartUrl,
          }}
        >
          <Base>
            <MicrostoreHead
              title={settings.companyName}
              favicon={settings.faviconUrl}
            />
            <TopNav
              logoUrl={settings.logoUrl}
              companyName={settings.companyName}
              showCartIcon={cart}
              inline={inline}
            />
            <Container>
              {children}
              <Footer />
            </Container>
          </Base>
        </OrderContainer>
      </OrderStorage>
    </CommerceLayer>
  )
}

export default MicrostoreContainer
