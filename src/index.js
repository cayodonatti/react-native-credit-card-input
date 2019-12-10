import connectToState from "./connectToState"
import CCF from "./CreditCardInput"
import LiteCCF from "./LiteCreditCardInput"
import CV from "./CardView"
import ACards from './AcceptedCards'

export const CreditCardInput = connectToState(CCF)
export const LiteCreditCardInput = connectToState(LiteCCF)
export const CardView = CV

export const AcceptedCards = ACards
