import React from 'react'
import HeroSection from '../pages/HeroSection'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import WhyChooseRegisterKaro from '../pages/WhyChooseRegisterKaro'
import VideoIntro from '../pages/VideoIntro'
import TestimonialCard from '../pages/TestimonialCard'
import Faq from '../pages/Faq'
import AppDownloadSection from '../pages/AppDownloadSection'
import NumbersSection from '../pages/NumbersSection'
import MailContact from '../pages/MailContact'
import Client from '../pages/Clint'
import BlogSection from '../pages/BlogSection'
import ApplicationProcess from '../pages/ApplicationProcess'
import TrustedBySection from '../pages/TrustedBySection'
import Companies from '../pages/Companies'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <TrustedBySection></TrustedBySection>
        <Services></Services>
        <AboutUs></AboutUs>
        <WhyChooseRegisterKaro></WhyChooseRegisterKaro>
        <VideoIntro></VideoIntro>
        <Client></Client>
        <ApplicationProcess></ApplicationProcess>
        <BlogSection></BlogSection>
        <TestimonialCard></TestimonialCard>
        <Faq></Faq>
        <AppDownloadSection></AppDownloadSection>
        <NumbersSection></NumbersSection>
        <MailContact></MailContact>
        <Companies></Companies>
    </>
  )
}

export default HomePage
