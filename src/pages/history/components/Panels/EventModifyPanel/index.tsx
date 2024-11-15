import { useState } from "react";

import { useDeleteEventDetail } from "@/pages/history/apis/Event/deleteEventDetail";
import { useUpdateEventDetail } from "@/pages/history/apis/Event/updateEventDetail";

import { PanelWrapper, ModalOverlay, CloseButton, AddButton, InputField, TitleText, ButtonWrapper } from "./style";

interface EventModifyPanelProps {
    onClose: () => void;
    eventId: number;
}

const EventModifyPanel = ({ onClose, eventId }: EventModifyPanelProps) => {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const { mutate: updateEvent } = useUpdateEventDetail();
    const { mutate: deleteEvent } = useDeleteEventDetail();

    const handleUpdate = () => {
        const eventData = {
            eventTitle: name,
            eventStartDate: startDate,
            eventEndDate: endDate,
        };

        updateEvent(
            { eventId, eventData },
            {
                onSuccess: () => {
                    console.log("Event successfully updated.");
                    onClose();
                },
                onError: (error) => {
                    console.error("Failed to update event:", error);
                },
            },
        );
    };

    const handleDelete = () => {
        deleteEvent(eventId, {
            onSuccess: () => {
                console.log("Event successfully deleted.");
                onClose();
            },
            onError: (error) => {
                console.error("Failed to delete Event:", error);
            },
        });
    };

    return (
        <ModalOverlay>
            <PanelWrapper>
                <TitleText>이벤트 수정</TitleText>
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
                <ButtonWrapper>
                    <AddButton onClick={handleUpdate}>수정하기</AddButton>
                    <AddButton onClick={handleDelete}>삭제하기</AddButton>
                </ButtonWrapper>
            </PanelWrapper>
        </ModalOverlay>
    );
};

export default EventModifyPanel;
