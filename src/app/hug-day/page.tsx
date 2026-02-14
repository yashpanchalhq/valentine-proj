import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Hug Day 🤗 | Valentine Week',
  description: 'Happy Hug Day! Embrace with warm, loving hugs.',
};

export default function HugDay() {
  return (
    <DayPage
      emoji="🤗"
      title="Hug Day"
      date="February 12th"
      message="A hug from you is like a warm blanket on a cold night. It makes everything better and reminds me that I'm the luckiest person alive."
      poem={[
        "Wrapped in your arms, I find my peace,",
        "A place where all my worries cease 🌙",
        "Your embrace is my favorite place,",
        "Filled with love, warmth, and grace! 💕",
      ]}
      gradient="linear-gradient(135deg, #fff0f8 0%, #ffe0f0 50%, #ffd0e8 100%)"
      prevDay={{ name: 'Promise Day', href: '/promise-day', emoji: '🤞' }}
      nextDay={{ name: 'Kiss Day', href: '/kiss-day', emoji: '💋' }}
    />
  );
}
