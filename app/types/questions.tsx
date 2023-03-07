export type Questions = {
  question: string;
  showDate: string;
};

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

const formattedDate = mm + "/" + dd + "/" + yyyy;

const questions: Questions[] = [
  { question: "What motivates you to work hard?", showDate: "04/29/2022" },
  {
    question: "If you could go back in time, what year would you travel to?",
    showDate: "08/30/2022",
  },
  {
    question: "If money was no object, what would you do all day?",
    showDate: "08/01/2022",
  },
  {
    question: "If you were a superhero, what powers would you have?",
    showDate: "08/02/2022",
  },
  {
    question: "Where do you see yourself in five years?",
    showDate: "08/03/2022",
  },
  {
    question: "What did you want to be when you were small?",
    showDate: "08/04/2022",
  },
  { question: "What makes you laugh the most?", showDate: "05/5/2022" },
  {
    question: "What is your proudest accomplishment?",
    showDate: "08/06/2022",
  },
  {
    question: "What is your favorite family vacation?",
    showDate: "08/07/2022",
  },
  {
    question:
      "In the evening, would you rather play a game, visit a relative, watch a movie, or read?",
    showDate: "08/08/2022",
  },
  { question: "What really makes you angry?", showDate: "05/09/2022" },
  {
    question: "What is the best gift you have given?",
    showDate: "08/10/2022",
  },
  {
    question: "What is your family member’s proudest accomplishment?",
    showDate: "08/11/2022",
  },
  { question: "What’s your philosophy in life?", showDate: "05/12/2022" },
  {
    question: "What’s the one thing you would like to change about yourself?",
    showDate: "08/13/2022",
  },
  { question: "Are you religious or spiritual?", showDate: "05/14/2022" },
  {
    question: "Do you consider yourself an introvert or an extrovert?",
    showDate: "08/15/2022",
  },
  {
    question: "Which parent are you closer to and why?",
    showDate: "08/16/2022",
  },
  {
    question: "What was the best phase in your life?",
    showDate: "08/17/2022",
  },
  {
    question: "Have you ever lost someone close to you?",
    showDate: "08/18/2022",
  },
  {
    question: "Who is that one person you can talk to about just anything?",
    showDate: "05/19/2022",
  },
  {
    question: "What was the worst phase in your life?",
    showDate: "05/20/2022",
  },
  {
    question: "Who are you?",
    showDate: "08/10/2022",
  },
  {
    question: "Who was your first love?",
    showDate: "08/10/2022",
  },
  {
    question: "Is honesty always the best policy?",
    showDate: "08/10/2022",
  },
  {
    question:
      "If the world would end tomorrow and you could only spend your last day with 2 people who would it be?",
    showDate: "08/10/2022",
  },
  {
    question: "Who are you in 5 words or less?",
    showDate: "08/10/2022",
  },
  {
    question: "Why are you here?",
    showDate: "08/10/2022",
  },
  {
    question: "Do you believe in free will?",
    showDate: "08/10/2022",
  },
  {
    question: "Why do we suffer?",
    showDate: "08/10/2022",
  },
  {
    question: "What is beauty to you?",
    showDate: "08/10/2022",
  },
  {
    question: "Where does self-worth come from?",
    showDate: "08/10/2022",
  },
  {
    question: "Is one human life worth more than another?",
    showDate: "08/10/2022",
  },
  {
    question: "What is the goal of humanity?",
    showDate: "08/10/2022",
  },
  {
    question: "Do you believe in predestination?",
    showDate: "08/10/2022",
  },

  {
    question: "What does it mean to be happy?",
    showDate: "08/10/2022",
  },
  {
    question: "Is happiness universal or a matter of perspective?",
    showDate: "08/10/2022",
  },
  {
    question: "Is it really necessary to pursue happiness?",
    showDate: "08/10/2022",
  },
  {
    question: "What does pursueing happiness mean to you?",
    showDate: "08/10/2022",
  },
  {
    question: "Is morality relative or absolute?",
    showDate: "08/10/2022",
  },
  {
    question: "What is your favorite song? Why?",
    showDate: "08/10/2022",
  },
  {
    question: "What makes something immoral?",
    showDate: "08/10/2022",
  },
  {
    question: "Is it fair to punish criminals with death?",
    showDate: "08/10/2022",
  },
  {
    question: "How do you define “good” and “evil”?",
    showDate: "08/10/2022",
  },
  {
    question: "Would you kill one person in order to save 1,000?",
    showDate: "08/10/2022",
  },
  {
    question: "Are we obligated to help others?",
    showDate: "08/10/2022",
  },
  {
    question: "What is virtue?",
    showDate: "08/10/2022",
  },
  {
    question: "Can anyone ever really understand another’s feelings?",
    showDate: "08/10/2022",
  },
  {
    question: "How would you like to be remembered after you die?",
    showDate: "08/10/2022",
  },
  {
    question: "Should physician assisted death be legal?",
    showDate: "08/10/2022",
  },
  {
    question: "Should we try to prolong our lives at any cost?",
    showDate: "08/10/2022",
  },
  {
    question: "What makes something a human right?",
    showDate: "08/10/2022",
  },
  {
    question: "Do you believe human rights even exist?",
    showDate: "08/10/2022",
  },
  {
    question: "Does democracy guarantee individual liberty?",
    showDate: "08/10/2022",
  },
  {
    question: "Is personal autonomy a right?",
    showDate: "08/10/2022",
  },
  {
    question: "Do governments have the authority to regulate what people do?",
    showDate: "08/10/2022",
  },
  {
    question:
      "Who has the ultimate responsibility for protecting human rights?",
    showDate: "08/10/2022",
  },
  {
    question: "Is war ever justifiable?",
    showDate: "08/10/2022",
  },
  {
    question: "Is capital punishment ever appropriate?",
    showDate: "08/10/2022",
  },
  {
    question: "What constitutes good governance?",
    showDate: "08/10/2022",
  },
  {
    question: "Is socialism fair? What is “fair”?",
    showDate: "08/10/2022",
  },
  {
    question: "Are laws always good?",
    showDate: "08/10/2022",
  },
  {
    question: "What is the ideal government? Why?",
    showDate: "08/10/2022",
  },
  {
    question: "Why do you think people fall out of love?",
    showDate: "08/10/2022",
  },
  {
    question: "Is there such a thing as too much freedom?",
    showDate: "08/10/2022",
  },
  {
    question: "Should citizens obey unjust laws?",
    showDate: "08/10/2022",
  },
  {
    question: "Who decides which laws apply to whom?",
    showDate: "08/10/2022",
  },
  {
    question:
      "Where do we draw the line between criminal behavior and civil disobedience?",
    showDate: "08/10/2022",
  },
  {
    question:
      "Does the state have the moral duty to provide healthcare for its citizens?",
    showDate: "08/10/2022",
  },
  {
    question: "Is wealth redistribution morally correct?",
    showDate: "08/10/2022",
  },
  {
    question: "Are freedom and liberty the same thing?",
    showDate: "08/10/2022",
  },
  {
    question: "What makes someone free?",
    showDate: "08/10/2022",
  },
  {
    question: "Is there an innnate moral code?",
    showDate: "08/10/2022",
  },
  {
    question: "What is truth?",
    showDate: "08/10/2022",
  },
  {
    question: "What is time?",
    showDate: "08/10/2022",
  },
  {
    question: "Do you believe in fate?",
    showDate: "08/10/2022",
  },
  {
    question: "What is justice?",
    showDate: "08/10/2022",
  },
  {
    question: "Do memories still exist if you forget them?",
    showDate: "08/10/2022",
  },
  {
    question: "Why do we daydream?",
    showDate: "08/10/2022",
  },
  {
    question: "Why do we dream in our sleep?",
    showDate: "08/10/2022",
  },
  {
    question: "How do we determine if something is certain?",
    showDate: "08/10/2022",
  },
  {
    question: "Is everything subjective?",
    showDate: "08/10/2022",
  },
  {
    question: "What is the function of intuition?",
    showDate: "08/10/2022",
  },
  {
    question: "Does pain exist in itself or just our perception of it?",
    showDate: "08/10/2022",
  },
  {
    question: "How do we become better?",
    showDate: "08/10/2022",
  },
  {
    question: "Are you a good observer?",
    showDate: "08/10/2022",
  },
  {
    question: "Do you believe you have a choice?",
    showDate: "08/10/2022",
  },
  {
    question:
      "Is there a difference between a big choice and a little choice? How do you know the difference?",
    showDate: "08/10/2022",
  },
  {
    question: "How do science and spirituality coexist to you?",
    showDate: "08/10/2022",
  },
  {
    question: "",
    showDate: "08/10/2022",
  },
  {
    question: "",
    showDate: "08/10/2022",
  },
];

export const questionOfTheDay = questions.find(
  (q) => q.showDate === formattedDate
).question;
