import React from 'react'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { Footer } from '../../components/Footer/Footer'
import { InstructiveCard } from '../../components/InstructiveCard/InstructiveCard'
import { Featured } from '../../components/Featured/Featured'
import { Payments } from '../../components/Paytments/Payments'
import { Slideshow } from '../../components/Slideshow/Slideshow'
import { HeroStyle } from '../../styles/GlobalStyles'

export const Index = () => {
    return (
        <HeroStyle>
            <Slideshow />
            <Payments />
            <Featured />
            <CategoryCard />
            <InstructiveCard />
            <ContactForm />
            <Footer />
        </HeroStyle>
    )
}
