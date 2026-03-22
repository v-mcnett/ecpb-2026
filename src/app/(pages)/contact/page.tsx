import type { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Emerald City Photo Booth.',
}


export default function ContactPage() {
  return (
    <ContactForm />
  )
}