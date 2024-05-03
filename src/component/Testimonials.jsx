
export default function Testimonials() {
    const testimonials = [];
    return (
        <section>
            <div>
                <h2>
                    Testimonials
                </h2>
            <div>
                {
                    testimonials.map(testmonial => {
                        return <TestimonialCard />
                    })
                }
            </div>
            </div>
        </section>
    )
}