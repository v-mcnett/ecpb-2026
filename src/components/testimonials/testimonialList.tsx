import React from 'react';
import { MessageCircle } from 'lucide-react';

const testimonials = [
    {
        name: 'Brenna',
        text: 'So glad we used this business for our wedding .The guests really enjoyed the photos to take home and we loved seeing them after the wedding. It defnitely added to the fun at the reception. No problems whatsoever, great customer service, great price. We would definitely recommend and use again in the future if the opportunity arises. Thank you!',
        title: '',
        stars: 5
    },
    {
        name: 'CL',
        text: 'I was a little hesitant when my daughter suggested a photo booth for her wedding, but it was the biggest hit at the reception, after the bride and groom. Everyone LOVED IT!! It was so unique and fun. There was costumes to dress up in, accessories, and tons of laughter. The photo&rsquo;s themselves were awesome and extremely quick. No waiting around or having to come back later to pick them up.',
        title: '',
        stars: 4
    },
    {
        name: 'Tracy',
        text: 'We had a fabulous experience from start to finish with Emerald City Photo Booth. The owner, Chad, was incredibly nice and easy to work with. He and his assistant worked the photo booth at our son\'s bar mitzvah. It was a huge hit with kids and adults alike! Chad was reliable, friendly and responsive. I recommend Emerald City without any reservations!',
        title: '',
        stars: 4.5
    },
];

export default function TestimonialList() {
    return (
        <section
            style={{
                padding: '2rem 1rem',
                background: '#f9f9f9',
            }}
        >
            <h2 className="text-xl font-semibold flex items-center gap-2" style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>Hear from Our Customers <MessageCircle className="w-6 h-6" /></h2>
            <div className="testimonial-list grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            padding: '1.5rem',
                            flex: 1,
                            minWidth: 0,
                        }}
                        className="testimonial-item"
                    >
                        <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                            &quot;{testimonial.text}&quot;
                        </p>
                        <div>
                            <strong>{testimonial.name}</strong>
                            <div style={{ color: '#888', fontSize: '0.95rem' }}>{testimonial.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`
                    @media (min-width: 768px) {
                        .testimonial-list {
                            flex-direction: row;
                        }
                    }
                `}
            </style>
        </section>
    );
}