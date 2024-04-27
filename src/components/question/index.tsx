import { Alternative } from "components/alternative"
import { Button } from "components/button";
import { AlternativeEntity } from "entities/alternative.entity";
import { QuestionEntity } from "entities/question.entity"
import { useState } from "react"

function Question({text, alternatives, lastUserReply}: QuestionEntity) {

    const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<AlternativeEntity | null>(null);
    const [showReply, setShowReply] = useState(false);

    const handlePickQuestion = (alternative: AlternativeEntity) => {
        if(showReply){
            setShowReply(false);
        }
        setCurrentAlternativeSelected(alternative);
    }

    const handleReplyQuestion = () => {
        setShowReply(true);
    }

    return(
        <div className="shadow-md w-full rounded-lg mt-10">
            <div className="bg-blue-300 flex p-6 rounded-t-lg">
                <div>
                    <span className="text-white">Questão 25 - </span>
                </div>
                <div>
                    <span className="text-white">AWS - ACL-02 - </span>
                    <span className="text-white">Segunça</span>
                </div>

            </div>

            <div className="p-6">
                <p>{text}</p>
                {alternatives.map(alternative =>
                    <div className="ml-6 mt-2" onClick={() => handlePickQuestion(alternative)}>
                        <Alternative isSelected={alternative.id === currentAlternativeSelected?.id}/>
                    </div>
                )}

                <div className="flex items-center mt-12">
        
                    <Button text="Confirmar resposta" onClick={handleReplyQuestion} isDisabled={currentAlternativeSelected == null}/>
                    {showReply && (
                        <div className={`${currentAlternativeSelected?.isCorrect ? "bg-green-200" : "bg-red-200"} rounded-xl p-4 ml-5`}>
                            <span className={`${currentAlternativeSelected?.isCorrect ? "text-green-600" : "text-red-600"} font-bold`}>
                                {currentAlternativeSelected?.isCorrect ? "Parabéns, você acertou!" : `Ops. A alternativa correta é a [TO-DO]`}
                            </span>
                        </div> 
                    )}

                </div>

            </div>
        </div>
    )
}

export { Question }