import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Chocolate Day 🍫 | Valentine Week',
  description: 'Happy Chocolate Day! Sweeten your love with chocolates.',
};

export default function ChocolateDay() {
  return (
    <DayPage
      emoji="🍫"
      title="Chocolate Day"
      date="February 9th"
      message="Life with you is sweeter than any chocolate. You add the perfect sweetness to my everyday life, making everything better!"
      poem={[
        "Chocolate is sweet, but you are sweeter,",
        "My love for you grows deeper 🍬",
        "Like cocoa melting in the sun,",
        "Our hearts have become one! 💝",
      ]}
      gradient="linear-gradient(135deg, #fff5e6 0%, #ffe8d6 50%, #ffd4b8 100%)"
      prevDay={{ name: 'Propose Day', href: '/propose-day', emoji: '💝' }}
      nextDay={{ name: 'Teddy Day', href: '/teddy-day', emoji: '🧸' }}
    />
  );
}
