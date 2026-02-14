import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Rose Day 🌹 | For Annu🍒',
  description: 'Happy Rose Day, Annu! A rose as beautiful as you.',
};

export default function RoseDay() {
  return (
    <DayPage
      emoji="🌹"
      title="Rose Day"
      date="February 7th"
      message="Anu, just like this rose, you bring beauty, color, and fragrance to my life. Every petal reminds me of a reason why I love you. You make my world bloom with happiness! 🌹"
      poem={[
        "A rose for Anu, so rare and true,",
        "No flower on Earth compares to you 🌸",
        "Like petals soft, your gentle grace,",
        "Lights up my world, my favorite place 💕",
      ]}
      gradient="linear-gradient(135deg, #fff0f5 0%, #ffe4ec 50%, #ffc9da 100%)"
      nextDay={{ name: 'Propose Day', href: '/propose-day', emoji: '💝' }}
    />
  );
}
