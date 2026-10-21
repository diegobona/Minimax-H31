import { notFound } from 'next/navigation';

export const metadata = { robots: { index: false, follow: false } };

export default function ResultPage() {
  notFound();
}
