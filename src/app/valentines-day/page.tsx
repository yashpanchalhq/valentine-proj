import DayPage from '@/components/DayPage';

export const metadata = {
  title: "Valentine's Day 💕 | For Annu🍒",
  description: "Happy Valentine's Day, Annu! This day is all about celebrating YOU!",
};

export default function ValentinesDay() {
  return (
    <DayPage
      emoji="💕"
      title="Valentine's Day"
      date="February 14th"
      message="Happy Valentine's Day, Annu🍒! 💕 You are my everything - my best friend, my inspiration, my reason to smile every single day. Thank you for being the most amazing person I've ever known. I'm so lucky to have you in my life!"
      poem={[
        "Annu, today we celebrate our story,",
        "A love filled with magic and glory 🌹",
        "You complete me in every single way,",
        "Forever grateful on this Valentine's Day! 💖",
        "",
        "Every moment with you is a treasure,",
        "Your love brings me infinite pleasure 💕",
        "You're my forever, my always, my all,",
        "With you by my side, I'll never fall! ✨",
        "",
        "Here's to us and all we've shared,",
        "To inside jokes and moments we've dared 🎉",
        "I love you more with each passing day,",
        "Happy Valentine's Day, Annu, in every way! 💝",
      ]}
      gradient="linear-gradient(135deg, #ffe4ec 0%, #ffb6c1 50%, #ff91b5 100%)"
      prevDay={{ name: 'Kiss Day', href: '/kiss-day', emoji: '💋' }}
    />
  );
}
