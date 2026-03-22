import React from 'react';

type TestimonialItemProps = {
    name: string;
    title: string;
    description: string;
    stars: number;
};

const MAX_STARS = 5;

export const TestimonialItem: React.FC<TestimonialItemProps> = ({
    name,
    title,
    description,
    stars,
}) => {
    const renderStars = () => {
        const filledStars = Math.min(Math.max(stars, 0), MAX_STARS);
        return (
            <>
                {[...Array(MAX_STARS)].map((_, i) => (
                    <span key={i} style={{ color: i < filledStars ? '#FFD700' : '#ccc' }}>
                        ★
                    </span>
                ))}
            </>
        );
    };

    return (
        <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px', maxWidth: 400 }}>
            <div style={{ marginBottom: '0.5rem' }}>{renderStars()}</div>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{description}</p>
            <div>
                <strong>{name}</strong>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>{title}</div>
            </div>
        </div>
    );
};