import GameLayout from "../components/GameLayout";

// TODO: intergrate trivia API
function TriviaOfTheDay() {
  const question = "Who won the NBA championship in 2022?";
  const choices = [
    "Denver Nuggets",
    "Milwaukee Bucks",
    "Golden State Warriors",
    "Boston Celtics",
  ];

  return <GameLayout question={question} choices={choices} />;
}

export default TriviaOfTheDay;
