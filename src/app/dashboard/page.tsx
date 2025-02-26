import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  interface MockCard {
    id: number;
    subject: string;
    question: string;
    answer: string;
  }

  const mockData: MockCard[] = [
    {
      id: 1,
      subject: "History",
      question: "Who fought in WWII?",
      answer: "Germany, Japan, Italy, USA, UK, Russia",
    },
    {
      id: 2,
      subject: "Science",
      question: "What is the chemical symbol for gold?",
      answer: "Au",
    },
    {
      id: 3,
      subject: "Math",
      question: "What is the square root of 144?",
      answer: "12",
    },
    {
      id: 4,
      subject: "Geography",
      question: "What is the capital of Canada?",
      answer: "Ottawa",
    },
    {
      id: 5,
      subject: "Literature",
      question: "Who wrote '1984'?",
      answer: "George Orwell",
    },
    {
      id: 6,
      subject: "Technology",
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language",
    },
    {
      id: 7,
      subject: "Biology",
      question: "What is the powerhouse of the cell?",
      answer: "Mitochondria",
    },
    {
      id: 8,
      subject: "Physics",
      question: "What is Newton's First Law of Motion?",
      answer:
        "An object in motion stays in motion unless acted upon by an external force.",
    },
    {
      id: 9,
      subject: "Music",
      question: "Which composer wrote the 'Moonlight Sonata'?",
      answer: "Ludwig van Beethoven",
    },
    {
      id: 10,
      subject: "Sports",
      question: "How many players are on a standard soccer team?",
      answer: "11",
    },
    {
      id: 11,
      subject: "Chemistry",
      question: "What is the pH of pure water?",
      answer: "7",
    },
    {
      id: 12,
      subject: "Astronomy",
      question: "What planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      id: 13,
      subject: "History",
      question: "Who was the first President of the United States?",
      answer: "George Washington",
    },
    {
      id: 14,
      subject: "Geography",
      question: "Which is the longest river in the world?",
      answer: "The Nile River",
    },
    {
      id: 15,
      subject: "Math",
      question: "What is the value of π (pi) rounded to 3 decimal places?",
      answer: "3.142",
    },
    {
      id: 16,
      subject: "Psychology",
      question: "What is cognitive dissonance?",
      answer:
        "The mental discomfort experienced when holding two conflicting beliefs.",
    },
    {
      id: 17,
      subject: "Art",
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci",
    },
    {
      id: 18,
      subject: "Business",
      question: "What does ROI stand for?",
      answer: "Return on Investment",
    },
    {
      id: 19,
      subject: "Programming",
      question: "What does 'DRY' stand for in coding?",
      answer: "Don't Repeat Yourself",
    },
    {
      id: 20,
      subject: "Philosophy",
      question: "Who wrote 'The Republic'?",
      answer: "Plato",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl mb-6">Dashboard</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {mockData.map((card) => (
          <div className="bg-misty-sky rounded-lg h-80" key={card.id}>
            <div className="p-4 flex flex-col gap-4 h-full">
              <Badge variant="secondary" className="max-w-fit">
                {card.subject}
              </Badge>
              <p className="text-lg">{card.question}</p>
              <p className="p-2 bg-pearl-glow rounded-lg h-full">
                {card.answer}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
