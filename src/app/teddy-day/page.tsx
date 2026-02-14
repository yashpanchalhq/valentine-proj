import DayPage from '@/components/DayPage';

export const metadata = {
  title: 'Teddy Day 🧸 | Valentine Week',
  description: 'Happy Teddy Day! Gift a cuddly companion to your loved one.',
};

export default function TeddyDay() {
  return (
    <DayPage
      emoji="🧸"
      title="Teddy Day"
      date="February 10th"
      message="Just like a teddy bear provides comfort and warmth, you make me feel safe and loved. You're my favorite person to cuddle with!"
      poem={[
        "Soft and cuddly, warm and true,",
        "This teddy represents my love for you 🌟",
        "When I'm not there to hold you near,",
        "May this remind you I'm always here! 💕",
      ]}
      gradient="linear-gradient(135deg, #fff3e0 0%, #ffe9cc 50%, #ffd9a8 100%)"
      prevDay={{ name: 'Chocolate Day', href: '/chocolate-day', emoji: '🍫' }}
      nextDay={{ name: 'Promise Day', href: '/promise-day', emoji: '🤞' }}
    />
  );
}
