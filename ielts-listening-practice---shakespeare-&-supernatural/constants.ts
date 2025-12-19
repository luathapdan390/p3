
import { Question, QuestionType, Option } from './types';

export const TRANSCRIPT = `
Julie: That was an interesting lecture.
Lecturer: I'm glad you thought so.
Dave: Yes, it made a break from the usual lectures on literary style. It certainly made me look at some of Shakespeare's plays, like Hamlet, and the playwright himself in a new light.
Julie: Me too! I always thought Shakespeare believed in the supernatural and that was the reason why so many of his plays, like Hamlet and Macbeth, featured a ghost.
L: What you thought is a common misconception. However, when you think about it, it was unlikely that Shakespeare would have been sympathetic to a belief in ghosts.
Dave: Why?
L: Well, he was Protestant, as was his audience, and the Protestant religion did not subscribe to a belief in ghosts as spirits returning from another world. Also, Hamlet was set in Denmark and, although fictional, the play would have reflected the Protestant beliefs of the Danes, too.
Julie: So, the main religion in England at the time was Protestantism?
L: Very much so. Any other religions, like Catholicism, were not tolerated by the religious authorities or James I, who was head of the Church of England at the time.
Julie: What did the Catholics believe about ghosts?
L: Their religion was compatible with a belief in the spirit world as it were. Ghosts were seen as lost souls that were in Purgatory, that is to say, a state between Heaven and Hell.
Julie: So it was obvious, really, that Shakespeare incorporated ghosts into his play for other reasons, right?
L: Absolutely. It's certainly odd to write about something you really don't believe in and then ask the audience to believe in it. So, yes, there was clearly another motive.
Julie: I guess when you think about it, it's quite apparent. As you mentioned in the lecture, ghosts appear in Macbeth and Hamlet really to show what the characters are thinking and as a catalyst for certain events.
L: Quite right.
Dave: And I think it's quite plain that Shakespeare had no belief in the supernatural. The fact that the ghosts seen by Macbeth and Hamlet are only often either visible to themselves or speak only to them suggests that the ghosts are only as real as the imagination of those who see them.
Julie: So, would you say that the audience was as sceptical as Shakespeare with regard to ghosts?
L: Well, as you know, the official line would have been that they didn't believe in ghosts, as it was not in line with Protestant beliefs prevalent at the time. Nevertheless, contrary to expectations, they do seem to have been a superstitious lot. Belief in witches and astrology were common back then, but how they justified their beliefs in religious terms is quite a mystery.

Julie: People, I think, today are a lot less gullible than in that period though, don't you agree? I mean honestly! Believing in witches and astrology and all that...
L: Well, judging by the popularity of TV programmes today like 'Most Haunted' I would say there's a fair amount of interest in the supernatural still.
Julie: I guess most people are like me - curious, but not entirely convinced when it comes to the spirit world.
Dave: Well, I think ghosts are just the product of certain people's imaginations!
Julie: You can't overlook the fact that many supernatural events cannot be explained.
Dave: Personally, I think ghosts are just as likely to exist as UFOs and aliens.
L: Well, I think at least the latter do exist.
Julie: I agree; it's absurd to think we are alone in the universe.
Dave: Hmmm...
L: You certainly seem to be quite a sceptic, Dave.
Dave: Actually I do believe in some aspects of the paranormal...
Julie: Like?
Dave: Well, not ghosts and aliens, obviously, but things like telepathy and premonition.
Julie: It's easier to understand or believe in telepathy and premonition as you hear of so many examples of these phenomena occurring in real life. Not just reported stories but from friends and acquaintances. I'm inclined, though, to think premonitions are more coincidence than due to a paranormal event. But maybe I'm just saying that, as I've not had first-hand experience of premonitions.
Dave: So, you believe in telepathy then?
Julie: I think that the evidence in favour of it is impossible to deny. What do you think, Miss?
L: Maybe I'm less sceptical than most but I'm inclined to keep a pretty open mind on most things. Anyway, it's been a very interesting discussion but I'm afraid I have to leave now as I'm due to give another lecture.
Julie: Well, thank you for your time, and also your wonderful lecture!
Dave: Yes, thank you, we appreciated it!
L: My pleasure!
`;

export const QUESTIONS: Question[] = [
  {
    id: 21,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Julie and Dave thought the lecture",
    options: [
      { id: 'A', text: "gave a new insight into Shakespeare's style." },
      { id: 'B', text: "offered a thought-provoking view on Shakespeare and his work." },
      { id: 'C', text: "explained Shakespeare's belief in ghosts." }
    ],
    correctAnswer: 'B'
  },
  {
    id: 22,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Hamlet was a play",
    options: [
      { id: 'A', text: "which reflected popular belief in the supernatural." },
      { id: 'B', text: "that recorded historical events." },
      { id: 'C', text: "seemingly in conflict with accepted beliefs." }
    ],
    correctAnswer: 'C'
  },
  {
    id: 23,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "In the time of James I",
    options: [
      { id: 'A', text: "a belief in ghosts was not tolerated." },
      { id: 'B', text: "more people believed in ghosts." },
      { id: 'C', text: "certain religious beliefs were not acceptable." }
    ],
    correctAnswer: 'C'
  },
  {
    id: 24,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Shakespeare introduced ghosts into plays",
    options: [
      { id: 'A', text: "because he believed in a spirit world." },
      { id: 'B', text: "as a theatrical device." },
      { id: 'C', text: "to provoke religious debate." }
    ],
    correctAnswer: 'B'
  },
  {
    id: 25,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Shakespeare's audience would probably have",
    options: [
      { id: 'A', text: "secretly approved of a supernatural content in plays." },
      { id: 'B', text: "shown approval for plays with a supernatural content." },
      { id: 'C', text: "disapproved of the inclusion of ghosts in plays." }
    ],
    correctAnswer: 'A'
  },
  {
    id: 26,
    type: QuestionType.MATCHING,
    text: "Witches / Astrology",
    correctAnswer: 'A'
  },
  {
    id: 27,
    type: QuestionType.MATCHING,
    text: "Ghosts",
    correctAnswer: 'B'
  },
  {
    id: 28,
    type: QuestionType.MATCHING,
    text: "UFOs/Aliens",
    correctAnswer: 'C'
  },
  {
    id: 29,
    type: QuestionType.MATCHING,
    text: "Premonitions",
    correctAnswer: 'B'
  },
  {
    id: 30,
    type: QuestionType.MATCHING,
    text: "Telepathy",
    correctAnswer: 'C'
  }
];

// Fix: Import 'Option' from types.ts to use it as a type here
export const MATCHING_OPTIONS: Option[] = [
  { id: 'A', text: "Scornful, dismissive" },
  { id: 'B', text: "Open-minded" },
  { id: 'C', text: "Believing" }
];