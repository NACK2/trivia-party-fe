import GameLayout from "../../components/GameLayout";
import { getSessionToken } from "../../helper";
import { TRIVIA_BASE_URL } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// TODO: move this api call to to backend later
// reasoning: don't want session token exposed in frontend through network devTools, not sensitive info such as payment or user info,
// h/e, can ruin UX if other users obtain this sessionToken and ruin a users questions
const fetchQuestions = async () => {
  const sessionData = await getSessionToken();
  const sessionToken = sessionData?.data.token;

  const questions = await axios.get(
    `${TRIVIA_BASE_URL}/api.php?amount=10&token=${sessionToken}`,
  );
  return questions?.data;
};

// TODO: create component that accepts triviaData
function TriviaOfTheDay() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["trivia"],
    queryFn: fetchQuestions,
  });
  const triviaData: TriviaData = data?.results;

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

type TriviaData = {
  type: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
};
