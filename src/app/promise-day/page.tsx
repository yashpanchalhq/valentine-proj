import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Promise Day 🤞 | Valentine Week',
  description: 'Happy Promise Day! Make promises that last forever.',
};

export default function PromiseDay() {
  return (
    <DayPage
      emoji="🤞"
      title="Promise Day"
      date="February 11th"
      message="Today I promise to always be there for you, through thick and thin. My love for you is forever, and that's a promise I'll never break."
      poem={[
        "I promise to love you every day,",
        "To never let our spark fade away ✨",
        "Through sunny days and stormy weather,",
        "We'll face it all, forever together! 💞",
      ]}
      gradient="linear-gradient(135deg, #f0f4ff 0%, #e4ecff 50%, #d4e0ff 100%)"
      prevDay={{ name: 'Teddy Day', href: '/teddy-day', emoji: '🧸' }}
      nextDay={{ name: 'Hug Day', href: '/hug-day', emoji: '🤗' }}
    />
  );
}
