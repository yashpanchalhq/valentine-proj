import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Kiss Day 💋 | Valentine Week',
  description: 'Happy Kiss Day! Seal your love with a kiss.',
};

export default function KissDay() {
  return (
    <DayPage
      emoji="💋"
      title="Kiss Day"
      date="February 13th"
      message="A kiss from you is like magic - it makes time stop and the whole world disappear. All I see is you, my love, my everything."
      poem={[
        "A gentle kiss upon your lips,",
        "Sweeter than any honey drips 🍯",
        "In that moment, worlds collide,",
        "With you forever by my side! 💖",
      ]}
      gradient="linear-gradient(135deg, #ffe8f0 0%, #ffd4e8 50%, #ffc0e0 100%)"
      prevDay={{ name: 'Hug Day', href: '/hug-day', emoji: '🤗' }}
      nextDay={{ name: "Valentine's Day", href: '/valentines-day', emoji: '💕' }}
    />
  );
}
