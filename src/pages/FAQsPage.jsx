import React, { useState } from "react"
import Header from "../component/Header"
import Footer from "../component/Footer"
import FAQs from "../component/faqs/FAQs"

export default function FAQsPage() 
{
    return <>
                <div style={{ backgroundColor: "#ffffff"}}>
                    <Header />
                        <FAQs />
                    <Footer />
                </div>
          </>
}


