import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Brenna',
        text: 'So glad we used this business for our wedding. The guests really enjoyed the photos to take home and we loved seeing them after the wedding. It definitely added to the fun at the reception. No problems whatsoever, great customer service, great price. We would definitely recommend and use again in the future if the opportunity arises. Thank you!',
        stars: 5,
        event: 'Wedding',
    },
    {
        name: 'CL',
        text: 'I was a little hesitant when my daughter suggested a photo booth for her wedding, but it was the biggest hit at the reception, after the bride and groom. Everyone LOVED IT!! It was so unique and fun. There was costumes to dress up in, accessories, and tons of laughter. The photos themselves were awesome and extremely quick. No waiting around or having to come back later to pick them up.',
        stars: 4,
        event: 'Wedding',
    },
    {
        name: 'Tracy',
        text: 'We had a fabulous experience from start to finish with Emerald City Photo Booth. The owner, Chad, was incredibly nice and easy to work with. He and his assistant worked the photo booth at our son\'s bar mitzvah. It was a huge hit with kids and adults alike! Chad was reliable, friendly and responsive. I recommend Emerald City without any reservations!',
        stars: 4.5,
        event: 'Bar Mitzvah',
    },
];

const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars);
    const hasHalf = stars % 1 !== 0;

    return (
        <div className="flex items-center gap-1 mb-4">
            {[...Array(fullStars)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 text-primary" />
            ))}
            {hasHalf && <Star className="w-4 h-4 text-primary/80" />}
            {[...Array(5 - Math.ceil(stars))].map((_, idx) => (
                <Star key={`empty-${idx}`} className="w-4 h-4 text-base-content/40" />
            ))}
        </div>
    );
};

export default function TestimonialList() {
    return (
        <section className="bg-base-200 rounded-3xl p-8 md:p-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-2">
                        Hear from Our Customers
                        <MessageCircle className="w-6 h-6 text-primary" />
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Trusted by local brides, families, and event planners for memorable photo booth experiences.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-xl border border-base-200 p-6">
                            {renderStars(testimonial.stars)}
                            <p className="italic text-base-content/80 mb-6">“{testimonial.text}”</p>
                            <div>
                                <p className="font-semibold text-lg">{testimonial.name}</p>
                                <p className="text-sm text-base-content/60">{testimonial.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}