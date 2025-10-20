import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
// Đã loại bỏ import lỗi: import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// 🎯 Trạng thái ban đầu
const initialState = {
    questions: [
        {
            id: 1,
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: "Canberra",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean",
            ],
            answer: "Pacific Ocean",
        },
        {
            id: 4,
            question: "Which language does React use primarily for logic?",
            options: ["Python", "Java", "JavaScript", "C#"],
            answer: "JavaScript",
        },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    feedback: "", // ✅ Thêm phản hồi đúng/sai
};

// ⚙️ Reducer xử lý logic quiz
function quizReducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            return { ...state, selectedOption: action.payload };

        case "SUBMIT_ANSWER": {
            const current = state.questions[state.currentQuestion];
            // Ngăn chặn submit lần nữa nếu đã có feedback
            if (state.feedback) return state;

            // Nếu hết giờ và chưa chọn, coi như chọn null (hoặc giữ nguyên selectedOption)
            const selected = action.payload || state.selectedOption;
            const isCorrect = selected === current.answer;

            // Nếu hết giờ (selected rỗng) nhưng vẫn submit thì hiển thị đáp án sai
            const feedbackText = selected
                ? (isCorrect ? "Correct! 🎉" : `Incorrect! The correct answer is ${current.answer}.`)
                : `Time's up! The correct answer is ${current.answer}.`;

            return {
                ...state,
                feedback: feedbackText,
                score: isCorrect ? state.score + 1 : state.score,
                // Giữ nguyên selectedOption để hiển thị (nếu có chọn)
            };
        }

        case "NEXT_QUESTION": {
            const nextIndex = state.currentQuestion + 1;
            return {
                ...state,
                currentQuestion: nextIndex,
                selectedOption: "",
                feedback: "",
                showScore: nextIndex === state.questions.length,
            };
        }

        case "RESTART_QUIZ":
            return { ...initialState };

        default:
            return state;
    }
}

function QuestionBankEx6() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, score, showScore, feedback } =
        state;

    const TIMER_DURATION = 10;
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [answered, setAnswered] = useState(false); // Quản lý trạng thái đã trả lời của câu hỏi hiện tại
    const [highScore, setHighScore] = useState(
        parseInt(localStorage.getItem("highScore")) || 0
    );

    // 🕒 Đếm ngược mỗi câu
    useEffect(() => {
        // Dừng nếu đã hoàn thành quiz hoặc đã submit/hết giờ
        if (showScore || answered) {
            return;
        }

        // Khởi tạo timer
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Hết giờ: Tự động submit
                    dispatch({ type: "SUBMIT_ANSWER", payload: selectedOption });
                    setAnswered(true); // Đánh dấu đã trả lời/hết giờ
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestion, showScore, answered, selectedOption]); // Thêm selectedOption để re-run khi chọn (cần thiết cho logic submit hết giờ)

    // 🏆 Lưu điểm cao vào localStorage
    useEffect(() => {
        if (showScore && score > highScore) {
            localStorage.setItem("highScore", score);
            setHighScore(score);
        }
    }, [showScore, score, highScore]);

    const handleOptionSelect = (option) => {
        if (!answered) {
            dispatch({ type: "SELECT_OPTION", payload: option });
        }
    };

    const handleSubmitAnswer = () => {
        if (!answered && selectedOption) {
            dispatch({ type: "SUBMIT_ANSWER", payload: selectedOption });
            setAnswered(true);
        }
    };

    const handleNextQuestion = () => {
        dispatch({ type: "NEXT_QUESTION" });
        // FIX: Reset trạng thái cục bộ cho câu hỏi mới
        setAnswered(false);
        setTimeLeft(TIMER_DURATION);
    };

    const handleRestartQuiz = () => {
        dispatch({ type: "RESTART_QUIZ" });
        setHighScore(parseInt(localStorage.getItem("highScore")) || 0);
        // FIX: Reset trạng thái cục bộ khi khởi động lại
        setAnswered(false);
        setTimeLeft(TIMER_DURATION);
    };

    return (
        <Container className="mt-4">
            <Card className="p-4 shadow-lg text-center">
                {showScore ? (
                    <div>
                        <h2>
                            ✅ Your Score: {score} / {questions.length}
                        </h2>
                        <h4 className="mt-2 text-success">
                            🏆 High Score: {highScore}
                        </h4>
                        <Button variant="primary" onClick={handleRestartQuiz}>
                            Restart Quiz
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Tiến trình */}
                        <h5>
                            Question {currentQuestion + 1} / {questions.length}
                        </h5>
                        <ProgressBar
                            now={((currentQuestion + 1) / questions.length) * 100}
                            className="mb-3"
                        />

                        {/* Câu hỏi */}
                        <h4>{questions[currentQuestion].question}</h4>

                        {/* Bộ đếm thời gian */}
                        <h5
                            className={`mt-2 ${timeLeft <= 5 ? "text-danger fw-bold" : "text-primary"
                                }`}
                        >
                            ⏱️ Time Left: {timeLeft}s
                        </h5>

                        {/* Các lựa chọn */}
                        <div className="mt-3 d-grid gap-2">
                            {questions[currentQuestion].options.map((option, index) => {
                                const isCorrect = option === questions[currentQuestion].answer;
                                const isSelected = selectedOption === option;

                                let variant = "outline-secondary";
                                if (answered) {
                                    // Nếu đã trả lời/hết giờ: Highlight đáp án đúng/sai
                                    if (isCorrect) {
                                        variant = "success"; // Đáp án đúng
                                    } else if (isSelected) {
                                        variant = "danger"; // Đáp án sai của người dùng
                                    } else {
                                        variant = "outline-secondary"; // Các lựa chọn còn lại
                                    }
                                } else if (isSelected) {
                                    variant = "primary"; // Đáp án đang được chọn
                                }

                                return (
                                    <Button
                                        key={index}
                                        variant={variant}
                                        className="m-1 shadow-sm"
                                        onClick={() => handleOptionSelect(option)}
                                        disabled={answered}
                                    >
                                        {option}
                                    </Button>
                                );
                            })}
                        </div>

                        {/* Phản hồi đúng/sai */}
                        {feedback && (
                            <div className="mt-4 p-3 rounded" style={{ backgroundColor: feedback.startsWith("Correct") ? '#d4edda' : '#f8d7da' }}>
                                {feedback.startsWith("Correct") ? (
                                    <h5 className="text-success mb-0 fw-bold">
                                        ✅ {feedback} {/* Sửa lỗi: Thay thế <FaCheckCircle /> bằng emoji */}
                                    </h5>
                                ) : (
                                    <h5 className="text-danger mb-0 fw-bold">
                                        ❌ {feedback} {/* Sửa lỗi: Thay thế <FaTimesCircle /> bằng emoji */}
                                    </h5>
                                )}
                            </div>
                        )}

                        {/* Nút điều khiển */}
                        <div className="mt-4">
                            {!answered ? (
                                <Button
                                    variant="primary"
                                    onClick={handleSubmitAnswer}
                                    disabled={!selectedOption}
                                >
                                    Submit Answer
                                </Button>
                            ) : (
                                <Button
                                    variant="success"
                                    onClick={handleNextQuestion}
                                    disabled={!answered}
                                >
                                    {currentQuestion === questions.length - 1
                                        ? "Finish Quiz"
                                        : "Next Question"}
                                </Button>
                            )}
                        </div>
                    </>
                )}
            </Card>
        </Container>
    );
}

export default QuestionBankEx6;