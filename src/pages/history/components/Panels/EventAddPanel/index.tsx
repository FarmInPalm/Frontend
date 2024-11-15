import { useState } from "react";

import { useCreateEventDetail } from "@/pages/history/apis/Event/createEventDetail";

import { PanelWrapper, CloseButton, AddButton, InputField, TitleText } from "./style";

interface EventAddPanelProps {
    onClose: () => void;
}

const EventAddPanel = ({ onClose }: EventAddPanelProps) => {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const { mutate: createEvent } = useCreateEventDetail();

    const handleAdd = () => {
        const eventData = {
            eventTitle: name,
            eventStartDate: startDate,
            eventStartDay: new Date(startDate).toLocaleDateString("ko-KR", { weekday: "long" }),
            eventEndDate: endDate,
            eventEndDay: new Date(endDate).toLocaleDateString("ko-KR", { weekday: "long" }),
        };

        createEvent(eventData, {
            onSuccess: () => {
                console.log("Event successfully added.");
                onClose();
            },
            onError: (error) => {
                console.error("Failed to add event:", error);
            },
        });
    };

    return (
        <PanelWrapper>
            <TitleText>새로운 이벤트</TitleText>
            <CloseButton onClick={onClose}>✕</CloseButton>
            <InputField placeholder="이벤트 제목" value={name} onChange={(e) => setName(e.target.value)} />
            <InputField
                placeholder="시작일 (YYYY-MM-DD)"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <InputField
                placeholder="종료일 (YYYY-MM-DD)"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <AddButton onClick={handleAdd}>추가하기</AddButton>
        </PanelWrapper>
    );
};

export default EventAddPanel;
