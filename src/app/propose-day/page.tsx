import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Propose Day 💝 | For Anu Rawat',
  description: 'Happy Propose Day, Anu! You are my forever choice.',
};

export default function ProposeDay() {
  return (
    <DayPage
      emoji="💝"
      title="Propose Day"
      date="February 8th"
      message="Anu, some feelings are too powerful to keep inside. You've changed my life in the most beautiful ways. Every day with you feels like the best day of my life. Will you be mine, today and always? 💕"
      poem={[
        "Anu, my heart has found its home in you,",
        "A love so pure, so perfectly true 💫",
        "With every beat, my heart sings your name,",
        "Will you stay with me? Let's keep this flame! 💕",
      ]}
      gradient="linear-gradient(135deg, #ffe4f0 0%, #ffd1e8 50%, #ffb8d9 100%)"
      prevDay={{ name: 'Rose Day', href: '/rose-day', emoji: '🌹' }}
      nextDay={{ name: 'Chocolate Day', href: '/chocolate-day', emoji: '🍫' }}
    />
  );
}
