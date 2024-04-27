import { Question } from "components/question";
import { QuestionEntity, QuestionType } from "entities/question.entity";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

function Questions() {

    const [questions, setQuestions] = useState<QuestionEntity[]>();

    useEffect(() => {
        const mockQuestions: QuestionEntity[] = [
            {
                id: "1",
                questionType: QuestionType.uniqueReply,
                text: "Questao 1",
                alternatives: [
                    {
                        id: "123",
                        isCorrect: false,
                        text: "alternativa 1"
                    },
                    {
                        id: "321",
                        isCorrect: true,
                        text: "alternativa 2"
                    },
                    {
                        id: "300",
                        isCorrect: false,
                        text: "alternativa 3"
                    },
                    {
                        id: "400",
                        isCorrect: false,
                        text: "alternativa 4"
                    }
                ]
            },
            {
                id: "2",
                questionType: QuestionType.uniqueReply,
                text: "Questao 2",
                alternatives: [
                    {
                        id: "430",
                        isCorrect: true,
                        text: "alternativa 1"
                    },
                    {
                        id: "923",
                        isCorrect: false,
                        text: "alternativa 2"
                    },
                    {
                        id: "120",
                        isCorrect: false,
                        text: "alternativa 3"
                    },
                    {
                        id: "777",
                        isCorrect: false,
                        text: "alternativa 4"
                    }
                ]
            }
        ];

        setQuestions(mockQuestions);
    }, [])

    return (
        <main className="px-12">
            <h1>Questões AWS Cloud Patricioner</h1>
            
            {questions?.map(question => (
                <Question {...question} />
            ))}

        </main>

    )
}

export { Questions }